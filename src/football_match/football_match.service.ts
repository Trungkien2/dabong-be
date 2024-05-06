import { Injectable } from '@nestjs/common';
import { CrudService } from 'src/core/Base/crud.service';
import { FootballMatch } from './entities/football_match.entity';

@Injectable()
export class FootballMatchService extends CrudService<FootballMatch> {
  constructor() {
    super(FootballMatch);
  }
}
