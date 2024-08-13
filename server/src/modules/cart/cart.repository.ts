import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { DataSource, DeleteResult, Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { Product } from 'src/entities/product.entity';
import { Cart } from 'src/entities/cart.entity';

@Injectable()
export class CartRepository {
  private productRepos: Repository<Product>;
  private userRepos: Repository<User>;
  private cartRepos: Repository<Cart>;

  constructor(@Inject('DATA_SOURCE') private readonly dataSource: DataSource) {
    this.productRepos = dataSource.getRepository(Product);
    this.userRepos = dataSource.getRepository(User);
    this.cartRepos = dataSource.getRepository(Cart);
  }

  async findCartById(id: string): Promise<Cart> {
    return this.cartRepos.findOne({
      where: {
        user: {
          user_id: id,
        },
      },
      relations: [
        'products',
        'products.colorSizes',
        'products.colorSizes.colors',
        'products.colorSizes.sizes',
      ],
    });
  }

  async addProductToCart(cartId: string, productId: string): Promise<Cart> {
    // chưa xử lý size, sl, color
    // Tìm kiếm giỏ hàng theo id
    const cart = await this.cartRepos.findOne({
      where: { cart_id: cartId },
      relations: ['products'], // Đảm bảo rằng mối quan hệ với products được load
    });

    if (!cart) {
      throw new Error('Cart not found');
    }

    // Tìm kiếm sản phẩm theo ID
    const product = await this.productRepos.findOneBy({
      product_id: productId,
    });

    if (!product) {
      throw new Error('Product not found');
    }

    // Thêm sản phẩm vào giỏ hàng nếu chưa có
    if (!cart.products.some((p) => p.product_id === productId)) {
      cart.products.push(product);
    }

    // Lưu giỏ hàng với sản phẩm đã thêm
    return this.cartRepos.save(cart);
  }
}
