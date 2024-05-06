import { Controller } from '@nestjs/common';
import { LeagueTeamService } from './league_team.service';
import { CrudController } from 'src/core/Base/crud.controller';

@Controller('league_team')
export class LeagueTeamController extends CrudController<LeagueTeamService> {
  constructor(private readonly leagueTeamService: LeagueTeamService) {
    super(leagueTeamService);
  }
}
