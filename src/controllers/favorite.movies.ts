import {
    Controller,
    Get,
    Param,
    Delete,
    Patch,
    Post,
    Query,
    Body,
    Put,
  } from '@nestjs/common';
  import { UsersService } from '../services/users.service';
  import { ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
  import UsersOutput from '../models/dto/output/users.output';
  import UsersInput from '../models/dto/input/users.input';
  import { FavoriteMoviesService } from 'src/services/FavoriteMovies.service';
  import FavoriteMoviesOutput from 'src/models/dto/output/favoriteMovies.output';
  import FavoriteMoviesInput from '../models/dto/input/users.input';
  
  @ApiTags('FavoriteMovies')
  @Controller('FavoriteMovies')
  export class FavoriteMoviesController {
    constructor(private readonly favoriteMoviesService: FavoriteMoviesService) {}
  
    @Get()
    @ApiCreatedResponse({ type: FavoriteMoviesOutput, isArray: true })
    findAll(): Promise<FavoriteMoviesOutput[]> {
      return this.favoriteMoviesService.findAll();
    }
  
    @Post()
    save(@Body() input: FavoriteMoviesInput) {
      return this.favoriteMoviesService.save(input);
    }
  
    @Put(':id')
    @ApiCreatedResponse({ type: FavoriteMoviesOutput })
    update(
      @Param('id') id: string,
      @Body() input: FavoriteMoviesInput,
    ): Promise<FavoriteMoviesOutput> {
      return this.favoriteMoviesService.update(+id, input);
    }
  
    @Get(':id')
    @ApiCreatedResponse({ type: FavoriteMoviesOutput })
    findOne(@Param('id') id: string) {
      return this.favoriteMoviesService.findOne(+id);
    }
  
    @Patch(':id')
    @ApiCreatedResponse({ type: FavoriteMoviesOutput })
    updateName(@Param('id') id: string, @Query('titlle') name: string) {
      return this.favoriteMoviesService.updateName(+id, name);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.favoriteMoviesService.remove(+id);
    }
  }