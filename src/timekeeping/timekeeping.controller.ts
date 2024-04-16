import { Controller } from '@nestjs/common';
import { TimekeepingService } from './timekeeping.service';
import { CreateTimekeepingDto } from './dto/create-timekeeping.dto';
import { UpdateTimekeepingDto } from './dto/update-timekeeping.dto';
import { CrudController } from 'src/core/Base/crud.controller';

@Controller('timekeeping')
export class TimekeepingController extends CrudController<TimekeepingService> {
  constructor(private readonly timekeepingService: TimekeepingService) {
    super(timekeepingService);
  }
}
