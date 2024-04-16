import { Controller } from '@nestjs/common';
import { DepartmentService } from './department.service';

import { CrudController } from 'src/core/Base/crud.controller';

@Controller('department')
export class DepartmentController extends CrudController<DepartmentService> {
  constructor(private readonly departmentService: DepartmentService) {
    super(departmentService);
  }
}
