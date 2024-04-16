import { Injectable } from '@nestjs/common';

import { News } from './entities/news.entity';
import { CrudService } from 'src/core/Base/crud.service';

@Injectable()
export class NewsService extends CrudService<News> {
  constructor() {
    super(News);
  }
}
