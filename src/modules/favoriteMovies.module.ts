import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import FavoriteMoviesEntity from 'src/models/entities/favoriteMovies.entity';
import { FavoriteMoviesController } from 'src/controllers/favorite.movies';
import { FavoriteMoviesService } from 'src/services/FavoriteMovies.service';
import FavoriteMoviesConverter from 'src/models/converters/favoriteMovies.converter';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteMoviesEntity])],
  controllers: [FavoriteMoviesController],
  providers: [FavoriteMoviesService, FavoriteMoviesConverter],
})
export class FavoriteMoviesModule {}
