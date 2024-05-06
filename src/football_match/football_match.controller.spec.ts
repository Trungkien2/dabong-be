import { Test, TestingModule } from '@nestjs/testing';
import { FootballMatchController } from './football_match.controller';
import { FootballMatchService } from './football_match.service';

describe('FootballMatchController', () => {
  let controller: FootballMatchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FootballMatchController],
      providers: [FootballMatchService],
    }).compile();

    controller = module.get<FootballMatchController>(FootballMatchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
