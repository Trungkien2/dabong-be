import { Test, TestingModule } from '@nestjs/testing';
import { LeagueTeamService } from './league_team.service';

describe('LeagueTeamService', () => {
  let service: LeagueTeamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeagueTeamService],
    }).compile();

    service = module.get<LeagueTeamService>(LeagueTeamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
