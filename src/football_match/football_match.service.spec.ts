import { Test, TestingModule } from '@nestjs/testing';
import { FootballMatchService } from './football_match.service';

describe('FootballMatchService', () => {
  let service: FootballMatchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FootballMatchService],
    }).compile();

    service = module.get<FootballMatchService>(FootballMatchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
