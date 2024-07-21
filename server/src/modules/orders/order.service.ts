import { Injectable } from '@nestjs/common';
import { OrderRepository } from './order.repository';
import { Order } from 'src/entities/order.entity';
import { OrderDto } from 'src/dto/order/order.dto';
import { JwtService } from '@nestjs/jwt';
import { DeleteResult } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepos: OrderRepository,
    private readonly jwtService: JwtService
  ) {}

  async getAllOrdersService(): Promise<Order[]> {
    return await this.orderRepos.findAll();
  }

  async getOrderByIdService(orderId: string): Promise<Order> {
    return await this.orderRepos.findById(orderId);
  }

  async updateStatusService(orderId: string, data: any): Promise<Order> {
    return await this.orderRepos.updateStatus(orderId, data);
  }

  async createOrderService(data: any, token: string): Promise<Order> {
    return this.orderRepos.createOne(data, token);
  }

  async deleteOrderService(
    token: string,
    orderId: string
  ): Promise<DeleteResult> {
    const payloadToken = this.jwtService.decode(token);
    return await this.orderRepos.deleteOne(payloadToken.user_id, orderId);
  }
}
