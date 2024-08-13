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
import { CartService } from './cart.service';
import { Cart } from '../../entities/cart.entity';
import { JwtService } from '@nestjs/jwt';

@Controller('/cart')
export class CartController {
  constructor(
    private readonly cartService: CartService,
    private readonly jwtService: JwtService
  ) {}

  @Get()
  @HttpCode(200)
  async getAllCategoryController(
    @Headers('Authorization') header: string
  ): Promise<Cart> {
    const token = header.replace('Bearer ', '');
    if (!token) {
      throw new UnauthorizedException('Not found token');
    }
    const payloadToken = this.jwtService.decode(token);
    return await this.cartService.getCartByIdService(payloadToken.user_id);
  }
}
