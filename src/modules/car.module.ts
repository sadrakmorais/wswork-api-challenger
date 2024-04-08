import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CarController } from "../controllers/car.controller";
import { CarService } from "../services/car.service";
import { Car, CarSchema } from "../schemas/car.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }])],
  controllers: [CarController],
  providers: [CarService],
})
export class CarModule {}
