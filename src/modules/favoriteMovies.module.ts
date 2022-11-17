import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import FavoriteMoviesEntity from '../models/entities/favoriteMovies.entity';
import { FavoriteMoviesController } from '../controllers/favorite.movies';
import { FavoriteMoviesService } from '../services/FavoriteMovies.service';
import FavoriteMoviesConverter from '../models/converters/favoriteMovies.converter';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteMoviesEntity])],
  controllers: [FavoriteMoviesController],
  providers: [FavoriteMoviesService, FavoriteMoviesConverter],
})
export class FavoriteMoviesModule {}
