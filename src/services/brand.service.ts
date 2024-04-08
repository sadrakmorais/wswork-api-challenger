import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Brand } from "../schemas/brand.schema";

@Injectable()
export class BrandService {
  constructor(@InjectModel(Brand.name) private brandModel: Model<Brand>) {}

  async getAllBrands(): Promise<Brand[]> {
    return this.brandModel.find().exec();
  }
}
