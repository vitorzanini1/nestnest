import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import UserEntity from '../models/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

import UsersOutput from '../models/dto/output/users.output';
import UsersConverter from '../models/converters/users.converter';
import UsersInput from '../models/dto/input/users.input';
import FavoriteMoviesEntity from 'src/models/entities/favoriteMovies.entity';
import FavoriteMoviesConverter from 'src/models/converters/favoriteMovies.converter';
import FavoriteMoviesInput from '../models/dto/input/users.input';
import FavoriteMoviesOutput from 'src/models/dto/output/favoriteMovies.output';
import { title } from 'process';

@Injectable()
export class FavoriteMoviesService {
  constructor(
    @InjectRepository(FavoriteMoviesEntity)
    private readonly userRepo: Repository<FavoriteMoviesEntity>,
    private readonly favoriteMoviesConverter: FavoriteMoviesConverter,
  ) {}

  async findAll(): Promise<FavoriteMoviesOutput[]> {
    const userEntities = await this.userRepo.find();

    const outputList = userEntities.map((entity) => {
      return this.favoriteMoviesConverter.entityToOutput(entity);
    });

    return outputList;
  }

  async save(input: FavoriteMoviesInput) {
    const entity = new FavoriteMoviesEntity();

    const convertedEntity = this.favoriteMoviesConverter.inputToEntity(input, entity);

    const savedEntity = await this.userRepo.save(convertedEntity);

    const output = this.favoriteMoviesConverter.entityToOutput(savedEntity);

    return output;
  }

  async update(id: number, input: FavoriteMoviesInput): Promise<FavoriteMoviesOutput> {
    const favoriteMoviesEntity = await this.userRepo.findOne({ where: { id: id } });

    const convertedEntity = this.favoriteMoviesConverter.inputToEntity(
      input,
      favoriteMoviesEntity,
    );

    const savedEntity = await this.userRepo.save(convertedEntity);

    const output = this.favoriteMoviesConverter.entityToOutput(savedEntity);

    return output;
  }

  async findOne(id: number) {
    const favoriteMoviesEntity = await this.userRepo.findOne({ where: { id: id } });

    const output = this.favoriteMoviesConverter.entityToOutput(favoriteMoviesEntity);

    return output;
  }

  async updateName(id: number, name: string) {
    const favoriteMoviesEntity = await this.userRepo.findOne({ where: { id } });

    favoriteMoviesEntity.title = title;

    const userSaved = await this.userRepo.save(favoriteMoviesEntity);

    const output = this.favoriteMoviesConverter.entityToOutput(userSaved);

    return output;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
