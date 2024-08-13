import {
  Column,
  Entity,
  OneToMany,
  JoinColumn,
  OneToOne,
  JoinTable,
  PrimaryGeneratedColumn,
  ManyToMany,
} from 'typeorm';
import { Product } from './product.entity';
import { User } from './user.entity';

@Entity('cart')
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  cart_id: string;

  @OneToOne(() => User, (user) => user.cart)
  user: User;

  @ManyToMany(() => Product, (product) => product.cart)
  @JoinTable({
    name: 'cart_products', // Tên bảng trung gian
    joinColumn: { name: 'cart_id', referencedColumnName: 'cart_id' },
    inverseJoinColumn: {
      name: 'product_id',
      referencedColumnName: 'product_id',
    },
  })
  products: Product[];
}
