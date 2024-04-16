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
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { UserRole } from 'src/core/contanst/user-role.enum';
import { Department } from 'src/department/entities/department.entity';
import { Salary } from 'src/salary/entities/salary.entity';
import { Timekeeping } from 'src/timekeeping/entities/timekeeping.entity';

@Table({
  tableName: 'tbl_user',
})
export class User extends Model<User> {
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
  })
  name: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: '',
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
    defaultValue: UserRole.USER,
    validate: {
      isIn: [[UserRole.USER, UserRole.ADMIN, UserRole.SUPER_ADMIN]],
    },
  })
  role: UserRole;

  // default value
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
  @ForeignKey(() => Department)
  @Column({ field: 'department_id', type: DataType.UUID })
  department_id: string;

  @BelongsTo(() => Department)
  department: Department;

  @HasMany(() => Salary)
  salary_list: Salary[];

  @HasMany(() => Timekeeping)
  timekeeping_list: Timekeeping[];
}
