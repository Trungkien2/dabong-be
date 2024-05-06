import { PartialType } from '@nestjs/swagger';
import { CreateLeagueTeamDto } from './create-league_team.dto';

export class UpdateLeagueTeamDto extends PartialType(CreateLeagueTeamDto) {}
