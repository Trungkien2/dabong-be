import { Module } from '@nestjs/common';
import { LeagueTeamService } from './league_team.service';
import { LeagueTeamController } from './league_team.controller';

@Module({
  controllers: [LeagueTeamController],
  providers: [LeagueTeamService]
})
export class LeagueTeamModule {}
