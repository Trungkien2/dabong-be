import { Injectable } from '@nestjs/common';
import { CrudService } from 'src/core/Base/crud.service';
import { LeagueTeam } from './entities/league_team.entity';

@Injectable()
export class LeagueTeamService extends CrudService<LeagueTeam> {
  constructor() {
    super(LeagueTeam);
  }
}
