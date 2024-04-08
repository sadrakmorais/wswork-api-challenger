import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Car } from "../schemas/car.schema";
import { CreateCarDto } from "../dto/create-car.dto";

@Injectable()
export class CarService {
  constructor(@InjectModel(Car.name) private carModel: Model<Car>) {}

  async getAllCars(): Promise<Car[]> {
    return this.carModel.find().exec();
  }

  async addCar(createCarDto: CreateCarDto): Promise<Car> {
    createCarDto.valor = createCarDto.valor.toString();

    const createdCar = new this.carModel(createCarDto);
    return createdCar.save();
  }
}
