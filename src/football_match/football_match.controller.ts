import { Controller } from '@nestjs/common';
import { FootballMatchService } from './football_match.service';
import { CrudController } from 'src/core/Base/crud.controller';

@Controller('football_match')
export class FootballMatchController extends CrudController<FootballMatchService> {
  constructor(private readonly footballMatchService: FootballMatchService) {
    super(footballMatchService);
  }
}
