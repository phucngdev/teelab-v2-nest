import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  HttpCode,
  Param,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from 'src/entities/order.entity';
import { OrderDto } from 'src/dto/order/order.dto';
import { JwtAuthGuard } from 'src/share/guards/auth.guard';
import { JwtService } from '@nestjs/jwt';

@Controller('/order')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly jwtService: JwtService
  ) {}

  // @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async getAllOrdersController(): Promise<Order[]> {
    return await this.orderService.getAllOrdersService();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  @HttpCode(200)
  async getOrderByIdController(
    @Headers('authorization') header: string,
    @Param('id') orderId: string
  ): Promise<Order> {
    const tokenSplit = header.split(' ')[1];
    if (!tokenSplit) {
      throw new UnauthorizedException('Not found token');
    }
    return await this.orderService.getOrderByIdService(tokenSplit, orderId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  @HttpCode(201)
  async createOrder(
    @Body() data: any,
    @Headers('Authorization') header: string
  ): Promise<Order> {
    const token = header.replace('Bearer ', '');
    if (!token) {
      throw new UnauthorizedException('Not found token');
    }
    const payloadToken = this.jwtService.decode(token);
    return await this.orderService.createOrderService(
      data,
      payloadToken.user_id
    );
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  @HttpCode(200)
  async deleteOrderController(
    @Headers('authorization') header: string,
    @Param('id') orderId: string
  ) {
    const tokenSplit = header.split(' ')[1];
    if (!tokenSplit) {
      throw new UnauthorizedException('Not found token');
    }
    return await this.orderService.deleteOrderService(tokenSplit, orderId);
  }
}
