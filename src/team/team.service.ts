import { Injectable } from '@nestjs/common';
import { CrudService } from 'src/core/Base/crud.service';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamService extends CrudService<Team> {
  constructor() {
    super(Team);
  }
}
