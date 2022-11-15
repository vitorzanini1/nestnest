import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


import FavoriteMoviesEntity from 'src/models/entities/favoriteMovies.entity';
import FavoriteMoviesConverter from 'src/models/converters/favoriteMovies.converter';
import FavoriteMoviesInput from '../models/dto/input/users.input';
import FavoriteMoviesOutput from 'src/models/dto/output/favoriteMovies.output';
import { title } from 'process';

@Injectable()
export class FavoriteMoviesService {
  constructor(
    @InjectRepository(FavoriteMoviesEntity)
    private readonly favoriteMoviesRepo: Repository<FavoriteMoviesEntity>,
    private readonly favoriteMoviesConverter: FavoriteMoviesConverter,
  ) {}

  async findAll(): Promise<FavoriteMoviesOutput[]> {
    const favoriteMoviesEntities = await this.favoriteMoviesRepo.find();

    const outputList = favoriteMoviesEntities.map((entity) => {
      return this.favoriteMoviesConverter.entityToOutput(entity);
    });

    return outputList;
  }

  async save(input: FavoriteMoviesInput) {
    const entity = new FavoriteMoviesEntity();

    const convertedEntity = this.favoriteMoviesConverter.inputToEntity(input, entity);

    const savedEntity = await this.favoriteMoviesRepo.save(convertedEntity);

    const output = this.favoriteMoviesConverter.entityToOutput(savedEntity);

    return output;
  }

  async update(id: number, input: FavoriteMoviesInput): Promise<FavoriteMoviesOutput> {
    const favoriteMoviesEntity = await this.favoriteMoviesRepo.findOne({ where: { id: id } });

    const convertedEntity = this.favoriteMoviesConverter.inputToEntity(
      input,
      favoriteMoviesEntity,
    );

    const savedEntity = await this.favoriteMoviesRepo.save(convertedEntity);

    const output = this.favoriteMoviesConverter.entityToOutput(savedEntity);

    return output;
  }

  async findOne(id: number) {
    const favoriteMoviesEntity = await this.favoriteMoviesRepo.findOne({ where: { id: id } });

    const output = this.favoriteMoviesConverter.entityToOutput(favoriteMoviesEntity);

    return output;
  }

  async updateName(id: number, name: string) {
    const favoriteMoviesEntity = await this.favoriteMoviesRepo.findOne({ where: { id } });

    favoriteMoviesEntity.title = title;

    const userSaved = await this.favoriteMoviesRepo.save(favoriteMoviesEntity);

    const output = this.favoriteMoviesConverter.entityToOutput(userSaved);

    return output;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
