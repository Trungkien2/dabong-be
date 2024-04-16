import { Test, TestingModule } from '@nestjs/testing';
import { TimekeepingController } from './timekeeping.controller';
import { TimekeepingService } from './timekeeping.service';

describe('TimekeepingController', () => {
  let controller: TimekeepingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimekeepingController],
      providers: [TimekeepingService],
    }).compile();

    controller = module.get<TimekeepingController>(TimekeepingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
