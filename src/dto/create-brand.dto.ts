import { ApiProperty } from "@nestjs/swagger";

export class CreateBrandDto {
  @ApiProperty()
  readonly id: number;
  @ApiProperty()
  readonly brand_name: string;
}
