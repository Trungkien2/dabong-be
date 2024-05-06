import { Test, TestingModule } from '@nestjs/testing';
import { LeagueTeamController } from './league_team.controller';
import { LeagueTeamService } from './league_team.service';

describe('LeagueTeamController', () => {
  let controller: LeagueTeamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeagueTeamController],
      providers: [LeagueTeamService],
    }).compile();

    controller = module.get<LeagueTeamController>(LeagueTeamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
