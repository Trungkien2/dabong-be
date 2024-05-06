import { Controller } from '@nestjs/common';
import { CrudController } from 'src/core/Base/crud.controller';
import { LeagueService } from './league.service';

@Controller('league')
export class LeagueController extends CrudController<LeagueService> {
  constructor(private readonly leagueService: LeagueService) {
    super(leagueService);
  }
}
