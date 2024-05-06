import { Injectable } from '@nestjs/common';
import { League } from './entities/league.entity';
import { CrudService } from 'src/core/Base/crud.service';

@Injectable()
export class LeagueService extends CrudService<League> {
  constructor() {
    super(League);
  }
}
