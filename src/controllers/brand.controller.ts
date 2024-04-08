import { Controller, Get, Post, Body } from "@nestjs/common";
import { BrandService } from "../services/brand.service";
import { Brand } from "../schemas/brand.schema";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("brands")
@Controller("brands")
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Get()
  async getAllBrands(): Promise<Brand[]> {
    return this.brandService.getAllBrands();
  }
}
