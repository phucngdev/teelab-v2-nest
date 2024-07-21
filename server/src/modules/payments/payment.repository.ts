import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import axios from 'axios';
import * as CryptoJS from 'crypto-js';
import * as moment from 'moment';
import { Payment } from 'src/entities/payment.entity';
import { DataSource, Repository } from 'typeorm';
import * as qs from 'qs';
import { OrderService } from '../orders/order.service';
import { OrderRepository } from '../orders/order.repository';
import { Order } from 'src/entities/order.entity';
import { OrderDetail } from 'src/entities/orderDetail.entity';
import { Size } from 'src/entities/size.entity';
import { Product } from 'src/entities/product.entity';
import { Color } from 'src/entities/color.entity';
import { User } from 'src/entities/user.entity';

@Injectable()
export class PaymentRepository {
  private orderRepos: Repository<Order>;
  private orderDetailRepos: Repository<OrderDetail>;
  private sizeRepos: Repository<Size>;
  private productRepos: Repository<Product>;
  private colorRepos: Repository<Color>;
  private useRepos: Repository<User>;

  constructor(@Inject('DATA_SOURCE') private readonly dataSource: DataSource) {
    this.orderRepos = dataSource.getRepository(Order);
    this.orderDetailRepos = dataSource.getRepository(OrderDetail);
    this.sizeRepos = dataSource.getRepository(Size);
    this.productRepos = dataSource.getRepository(Product);
    this.colorRepos = dataSource.getRepository(Color);
    this.useRepos = dataSource.getRepository(User);
  }

  config = {
    app_id: '2554', // app_id của ngừoi nhận tiền (ngừoi đăng ký zalopay)
    key1: 'sdngKKJmqEMzvh5QQcdD2A9XBSKUNaYn',
    key2: 'trMrHtvjo6myautxDUiAcYsVtaeQ8nhf',
    endpoint: 'https://sb-openapi.zalopay.vn/v2/create', // chạy với dev
  };
  async zalopayRepo(body: any, id: string): Promise<any> {
    const { total_amount } = body;

    const items =
      body.items.length > 0
        ? body.items.map((item) => ({
            product_id: item.product.product_id,
            size_id: item.size.size_id,
            color_id: item.color.color_id,
            count: item.count,
          }))
        : [{}];

    try {
      const embed_data = {
        redirecturl: 'http://localhost:5173/trang-thai-thanh-toan',
        phone: body.phone,
        name: body.name,
        email: body.email,
        city: body.city,
        district: body.district,
        ward: body.ward,
        street: body.street,
        address: body.address,
        note: body.note,
        user_id: id,
      };

      const transID = Math.floor(Math.random() * 1000000);
      const order = {
        app_id: this.config.app_id,
        app_trans_id: `${moment().format('YYMMDD')}_${transID}`,
        app_user: 'user123',
        app_time: Date.now(),
        item: JSON.stringify(items),
        embed_data: JSON.stringify(embed_data),
        amount: total_amount,
        description: `Lazada - Payment for the order #${transID}`,
        bank_code: '',

        callback_url: 'https://e66d-1-53-8-241.ngrok-free.app/payment/callback', // sau khi thanh toán sẽ gọi đến api này
      };

      const data =
        this.config.app_id +
        '|' +
        order.app_trans_id +
        '|' +
        order.app_user +
        '|' +
        order.amount +
        '|' +
        order.app_time +
        '|' +
        order.embed_data +
        '|' +
        order.item;
      order['mac'] = CryptoJS.HmacSHA256(data, this.config.key1).toString();
      const result = await axios.post(this.config.endpoint, null, {
        params: order,
      });
      return { ...result.data, app_trans_id: order.app_trans_id };
    } catch (error) {
      throw new InternalServerErrorException('Internal server error');
    }
  }

  async zalopayCallbackRepo(data: any): Promise<any> {
    try {
      let result = {};
      let dataStr = data.data;
      let reqMac = data.mac;

      let mac = CryptoJS.HmacSHA256(dataStr, this.config.key2).toString();

      // kiểm tra callback hợp lệ (đến từ ZaloPay server)
      if (reqMac !== mac) {
        // callback không hợp lệ
        result['return_code'] = -1;
        result['return_message'] = 'mac not equal';
      } else {
        // thanh toán thành công
        // merchant cập nhật trạng thái cho đơn hàng ở đây
        // let dataJson = JSON.parse(dataStr, this.config.key2);
        let dataJson = JSON.parse(dataStr);
        console.log('dataJson: ', dataJson);
        const userId = dataJson.app_user;
        const productData = JSON.parse(dataJson.item);
        // Tạo đơn hàng sau khi thanh toán thành công, sử dụng dữ liệu từ request
        const orderData = JSON.parse(dataJson.embed_data);
        console.log(orderData);

        // tạo order với status = 2
        const user = await this.useRepos.findOne({
          where: { user_id: orderData.user_id },
        });
        console.log('user ', user);

        if (!user) {
          throw new NotFoundException('User not found');
        }
        const order = await this.orderRepos.create({
          total_amount: dataJson.amount,
          note: orderData.note || '',
          name: orderData.name,
          email: orderData.email,
          phone: orderData.phone,
          address: orderData.address,
          city: orderData.city,
          district: orderData.district,
          ward: orderData.ward,
          status: 2,
          user: user,
        });
        console.log('order ', order);

        // Lưu đơn hàng chính vào cơ sở dữ liệu
        await this.orderRepos.save(order);
        console.log('save order');
        console.log(dataJson.item);

        // Xử lý các mục hàng trong đơn hàng
        for (const item of productData) {
          console.log('item ', item);

          const product = await this.productRepos.findOneBy({
            product_id: item.product_id,
          });
          const color = await this.colorRepos.findOneBy({
            color_id: item.color_id,
          });
          const size = await this.sizeRepos.findOneBy({
            size_id: item.size_id,
          });
          console.log('tìm thấy tt', size, color, product);

          const orderDetail = await this.orderDetailRepos.create({
            order: order,
            product: product,
            color: color,
            size: size,
            quantity: item.count,
          });
          await this.orderDetailRepos.save(orderDetail);
          console.log('save tt');
          size.quantity -= item.count;
          console.log('trừ counrt');
          await this.sizeRepos.save(size);
          console.log('save size');
        }

        result['return_code'] = 1;
        result['return_message'] = 'success';
      }
      return result;
    } catch (error) {
      throw new InternalServerErrorException('Internal server error');
    }
  }

  async zalopayCheckStatus(id: any): Promise<any> {
    const { app_trans_id } = id;
    try {
      let postData = {
        app_id: this.config.app_id,
        app_trans_id,
      };
      let data =
        postData.app_id + '|' + postData.app_trans_id + '|' + this.config.key1;
      postData['mac'] = CryptoJS.HmacSHA256(data, this.config.key1).toString();

      let postConfig = {
        method: 'post',
        url: 'https://sb-openapi.zalopay.vn/v2/query',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: qs.stringify(postData),
      };
      const result = await axios(postConfig);
      console.log(result.data);

      return result.data;
    } catch (error) {
      throw new InternalServerErrorException('Internal server error');
    }
  }
}
