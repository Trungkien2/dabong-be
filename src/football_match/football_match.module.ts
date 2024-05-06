import { Module } from '@nestjs/common';
import { FootballMatchService } from './football_match.service';
import { FootballMatchController } from './football_match.controller';

@Module({
  controllers: [FootballMatchController],
  providers: [FootballMatchService]
})
export class FootballMatchModule {}
