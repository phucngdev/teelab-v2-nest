import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { OrderDto } from 'src/dto/order/order.dto';
import { Order } from 'src/entities/order.entity';
import { OrderDetail } from 'src/entities/orderDetail.entity';
import { DataSource, DeleteResult, Repository } from 'typeorm';
import { UserRepository } from '../users/user.repository';
import { ProductRepository } from '../products/product.repository';
import { Size } from 'src/entities/size.entity';
import { User } from 'src/entities/user.entity';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class OrderRepository {
  private orderRepos: Repository<Order>;
  private orderDetailRepos: Repository<OrderDetail>;
  private sizeRepos: Repository<Size>;
  private productRepos: Repository<Product>;
  private userRepos: Repository<User>;

  constructor(@Inject('DATA_SOURCE') private readonly dataSource: DataSource) {
    this.orderRepos = dataSource.getRepository(Order);
    this.orderDetailRepos = dataSource.getRepository(OrderDetail);
    this.sizeRepos = dataSource.getRepository(Size);
    this.productRepos = dataSource.getRepository(Product);
    this.userRepos = dataSource.getRepository(User);
  }

  async findAll(): Promise<Order[]> {
    const orders = await this.orderRepos.find({
      relations: [
        'order_details',
        'user',
        'order_details.product',
        'order_details.size',
        'order_details.color',
      ],
    });
    return orders;
  }

  async findById(userId: string, orderId: string): Promise<Order> {
    // const user = await this.userRepos.findById(userId);
    // if (!user) {
    //   throw new NotFoundException("Not found user");
    // }
    return await this.orderRepos.findOne({
      where: { order_id: orderId },
      relations: ['order_details', 'order_details.product'],
    });
  }

  async createOne(data: any, id: any, status?: number): Promise<Order> {
    try {
      const user = await this.userRepos.findOne({
        where: { user_id: id },
      });

      if (!user) {
        throw new NotFoundException('User not found');
      }
      const order = this.orderRepos.create({
        total_amount: data.total_amount,
        note: data.note || '',
        name: data.name,
        phone: data.phone,
        address: data.address,
        city: data.city,
        district: data.district,
        ward: data.ward,
        status: status || data.status,
        user: user,
      });
      console.log('Tạo đơn hàng:', order);

      // Lưu đơn hàng chính vào cơ sở dữ liệu
      await this.orderRepos.save(order);
      console.log('Đơn hàng đã được lưu vào cơ sở dữ liệu');

      // Xử lý các mục hàng trong đơn hàng
      for (const item of data.items) {
        const orderDetail = this.orderDetailRepos.create({
          order: order,
          product: item.product,
          color: item.color,
          size: item.size,
          quantity: item.count,
        });
        console.log('Tạo chi tiết đơn hàng:', orderDetail);
        await this.orderDetailRepos.save(orderDetail);
        console.log('Chi tiết đơn hàng đã được lưu vào cơ sở dữ liệu');

        const sizeQuantity = await this.sizeRepos.findOneBy({
          size_id: item.size.size_id,
        });
        if (sizeQuantity) {
          sizeQuantity.quantity -= item.count;
          await this.sizeRepos.save(sizeQuantity);
          console.log('Cập nhật số lượng size:', sizeQuantity);
        }
      }

      return order;
    } catch (error) {
      console.error('Lỗi khi tạo đơn hàng:', error);
      throw new InternalServerErrorException('Internal server error');
    }
  }

  async deleteOne(userId: string, orderId: string): Promise<DeleteResult> {
    const user = await this.userRepos.findOneBy({ user_id: userId });
    if (!user) {
      throw new NotFoundException('Not found user');
    }
    try {
      return await this.orderRepos.delete(orderId);
    } catch (err) {
      throw new InternalServerErrorException('Internal server error');
    }
  }
}
