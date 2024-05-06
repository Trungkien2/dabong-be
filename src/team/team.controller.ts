import { Controller } from '@nestjs/common';
import { TeamService } from './team.service';
import { extend } from 'lodash';
import { CrudController } from 'src/core/Base/crud.controller';

@Controller('team')
export class TeamController extends CrudController<TeamService> {
  constructor(private readonly teamService: TeamService) {
    super(teamService);
  }
}
