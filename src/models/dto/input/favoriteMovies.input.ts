import { ApiProperty } from '@nestjs/swagger';

export default class UsersInput {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  user_id?: number;

  @ApiProperty()
  active: boolean;
}

