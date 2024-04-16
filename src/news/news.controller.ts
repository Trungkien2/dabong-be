import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { CrudController } from 'src/core/Base/crud.controller';

@Controller('news')
export class NewsController extends CrudController<NewsService> {
  constructor(private readonly newsService: NewsService) {
    super(newsService);
  }
}
