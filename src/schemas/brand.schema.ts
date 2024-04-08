import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

@Schema()
export class Brand extends Document {
  @Prop()
  @ApiProperty()
  id: number;

  @Prop()
  @ApiProperty()
  brand_name: string;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);
