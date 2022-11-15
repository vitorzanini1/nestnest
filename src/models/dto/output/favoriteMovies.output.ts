import { ApiProperty } from '@nestjs/swagger';

export default class FavoriteMoviesOutput {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  active: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
  user_id: any;
}
