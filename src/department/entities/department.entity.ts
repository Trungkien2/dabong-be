import {
  Table,
  Column,
  Model,
  DataType,
  Default,
  AllowNull,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
  HasMany,
} from 'sequelize-typescript';
import { DepartmentName } from 'src/core/contanst/department-name.enum';
import { User } from 'src/user/user.entity';

@Table({
  tableName: 'tbl_department',
})
export class Department extends Model<Department> {
  @PrimaryKey
  @AllowNull
  @Default(DataType.UUIDV1)
  @Column({
    type: DataType.UUID,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      isIn: [
        [
          DepartmentName.ACCOUNTANT,
          DepartmentName.HR,
          DepartmentName.IT,
          DepartmentName.MARKETING,
        ],
      ],
    },
  })
  name: DepartmentName;

  @Column({
    type: DataType.BIGINT,
    defaultValue: 0,
  })
  created_at_unix_timestamp: number;
  @Column({
    type: DataType.BIGINT,
    defaultValue: 0,
  })
  updated_at_unix_timestamp: number;

  @Column({
    type: DataType.DATE,
  })
  deleted_at: string;
  @CreatedAt
  CreatedAt: Date;

  @UpdatedAt
  UpdatedAt: Date;

  // asscosation
  @HasMany(() => User)
  employee_list: User[];
}
