import { Injectable } from '@nestjs/common';

import FavoriteMoviesEntity from '../entities/favoriteMovies.entity';
import FavoriteMoviesOutput from '../dto/output/favoriteMovies.output';
import FavoriteMoviesInput from '../dto/input/users.input';


@Injectable()
export default class FavoriteMoviesConverter {
  inputToEntity(input: FavoriteMoviesInput, entity: FavoriteMoviesEntity) {
    entity.id = input.id;
    entity.title = input.title;
    entity.user_id = input.user_id;
    entity.createdAt = new Date();
    entity.updateAt = new Date();

    return entity;
  }

  entityToOutput(entity: FavoriteMoviesEntity): FavoriteMoviesOutput {
    const output = new FavoriteMoviesOutput();

    output.id = entity.id;
    output.title = entity.title;
    output.user_id = entity.user_id;
    output.active = entity.active;
    output.createdAt = entity.createdAt;
    output.updatedAt = entity.updateAt;

    return output;
  }
}
