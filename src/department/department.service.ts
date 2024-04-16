import { Injectable } from '@nestjs/common';

import { CrudService } from 'src/core/Base/crud.service';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentService extends CrudService<Department> {
  constructor() {
    super(Department);
  }
}
