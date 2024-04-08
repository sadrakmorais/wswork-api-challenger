import { Controller, Get, Post, Body } from "@nestjs/common";
import { CarService } from "../services/car.service";
import { Car } from "../schemas/car.schema";
import { CreateCarDto } from "../dto/create-car.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("cars")
@Controller("cars")
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  async getAllCars(): Promise<Car[]> {
    return this.carService.getAllCars();
  }

  @Post()
  async addCar(@Body() createCarDto: CreateCarDto): Promise<Car> {
    createCarDto.valor = createCarDto.valor.toString();
    return this.carService.addCar(createCarDto);
  }
}
