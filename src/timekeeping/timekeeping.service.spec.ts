import { Test, TestingModule } from '@nestjs/testing';
import { TimekeepingService } from './timekeeping.service';

describe('TimekeepingService', () => {
  let service: TimekeepingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimekeepingService],
    }).compile();

    service = module.get<TimekeepingService>(TimekeepingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
