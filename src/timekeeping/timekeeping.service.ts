import { Injectable } from '@nestjs/common';

import { CrudService } from 'src/core/Base/crud.service';
import { Timekeeping } from './entities/timekeeping.entity';

@Injectable()
export class TimekeepingService extends CrudService<Timekeeping> {
  constructor() {
    super(Timekeeping);
  }
}
