import { INestApplication, Module } from "@nestjs/common";
import { CarModule } from "./modules/car.module";
import { BrandModule } from "./modules/brand.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://sadraksdk1:z0Q2NMc609Wv3RZQ@cluster0.lrrvs.mongodb.net/"
    ),
    CarModule,
    BrandModule,
  ],
})
export class AppModule {}
