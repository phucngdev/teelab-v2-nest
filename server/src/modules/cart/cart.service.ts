import { Injectable } from '@nestjs/common';
import { CartRepository } from './cart.repository';
import { Cart } from '../../entities/cart.entity';

@Injectable()
export class CartService {
  constructor(
    private readonly cartRepos: CartRepository
    // private readonly jwtService: JwtService
  ) {}

  async getCartByIdService(id: string): Promise<Cart> {
    return this.cartRepos.findCartById(id);
  }
}
