import { Injectable } from '@nestjs/common';

import { CrudService } from 'src/core/Base/crud.service';
import { Salary } from './entities/salary.entity';

@Injectable()
export class SalaryService extends CrudService<Salary> {
  constructor() {
    super(Salary);
  }
}
