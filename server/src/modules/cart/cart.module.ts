import { Module } from '@nestjs/common';
import { OrmModule } from 'src/configs/typeorm/orm.module';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../users/user.module';
import { CartService } from './cart.service';
import { CartRepository } from './cart.repository';
import { CartController } from './cart.controller';

@Module({
  imports: [UserModule, OrmModule],
  providers: [CartService, CartRepository],
  controllers: [CartController],
})
export class CartModule {}
