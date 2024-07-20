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

@Injectable()
export class OrderRepository {
  private orderRepos: Repository<Order>;
  private orderDetailRepos: Repository<OrderDetail>;
  private sizeRepos: Repository<Size>;

  constructor(
    @Inject('DATA_SOURCE') private readonly dataSource: DataSource,
    private readonly productRepos: ProductRepository,
    private readonly userRepos: UserRepository
  ) {
    this.orderRepos = dataSource.getRepository(Order);
    this.orderDetailRepos = dataSource.getRepository(OrderDetail);
    this.sizeRepos = dataSource.getRepository(Size);
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

  async createOne(data: any, id: any): Promise<Order> {
    try {
      const order = this.orderRepos.create({
        total_amount: data.total_amount,
        note: data.note || '',
        name: data.name,
        phone: data.phone,
        address: data.address,
        city: data.city,
        district: data.district,
        ward: data.ward,
        status: data.status,
        user: { user_id: id },
      });

      // Lưu đơn hàng chính vào cơ sở dữ liệu
      await this.orderRepos.save(order);

      // Xử lý các mục hàng trong đơn hàng
      for (const item of data.items) {
        const orderDetail = this.orderDetailRepos.create({
          order: order,
          product: item.product,
          color: item.color,
          size: item.size,
          quantity: item.count,
        });
        await this.orderDetailRepos.save(orderDetail);
        const sizeQuantity = await this.sizeRepos.findOneBy({
          size_id: item.size.size_id,
        });
        if (sizeQuantity) {
          sizeQuantity.quantity -= item.count;
          await this.sizeRepos.save(sizeQuantity);
        }
      }

      return order;
    } catch (error) {
      throw new InternalServerErrorException('Internal server error');
    }
  }

  async deleteOne(userId: string, orderId: string): Promise<DeleteResult> {
    const user = await this.userRepos.findById(userId);
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
