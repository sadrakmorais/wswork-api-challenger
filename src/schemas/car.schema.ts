import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

@Schema()
export class Car extends Document {
  @Prop()
  @ApiProperty()
  id: number;

  @Prop()
  @ApiProperty()
  timestamp_cadastro: number;

  @Prop()
  @ApiProperty()
  modelo_id: number;

  @Prop()
  @ApiProperty()
  ano: number;

  @Prop()
  @ApiProperty()
  combustivel: string;

  @Prop()
  @ApiProperty()
  num_portas: number;

  @Prop()
  @ApiProperty()
  cor: string;

  @Prop()
  @ApiProperty()
  nome_modelo: string;

  @Prop()
  @ApiProperty()
  valor: string;

  @Prop({ default: null })
  brand?: number;
}

export const CarSchema = SchemaFactory.createForClass(Car);
