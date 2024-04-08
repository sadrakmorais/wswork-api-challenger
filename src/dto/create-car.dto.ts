import { ApiProperty } from "@nestjs/swagger";

export class CreateCarDto {
  @ApiProperty()
  readonly id: number;
  @ApiProperty()
  readonly timestamp_cadastro: number;
  @ApiProperty()
  readonly modelo_id: number;
  @ApiProperty()
  readonly ano: number;
  @ApiProperty()
  readonly combustivel: string;
  @ApiProperty()
  readonly num_portas: number;
  @ApiProperty()
  readonly cor: string;
  @ApiProperty()
  readonly nome_modelo: string;
  @ApiProperty()
  valor: string;
  @ApiProperty()
  readonly brand?: number;
}
