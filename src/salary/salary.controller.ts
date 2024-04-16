import { Controller } from '@nestjs/common';
import { SalaryService } from './salary.service';

import { CrudController } from 'src/core/Base/crud.controller';

@Controller('salary')
export class SalaryController extends CrudController<SalaryService> {
  constructor(private readonly salaryService: SalaryService) {
    super(salaryService);
  }
}
