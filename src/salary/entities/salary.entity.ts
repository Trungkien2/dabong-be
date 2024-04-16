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
} from 'sequelize-typescript';
import { User } from 'src/user/user.entity';
@Table({
  tableName: 'tbl_salary',
})
export class Salary extends Model<Salary> {
  @PrimaryKey
  @AllowNull
  @Default(DataType.UUIDV1)
  @Column({
    type: DataType.UUID,
  })
  id: string;

  @Column({
    type: DataType.BIGINT,
    defaultValue: 0,
  })
  start_at_unix_timestamp: number;
  @Column({
    type: DataType.BIGINT,
    defaultValue: 0,
    allowNull: true,
  })
  end_at_unix_timestamp: number;

  @Column({
    type: DataType.BIGINT,
    defaultValue: 0,
  })
  Salary_amount: number;

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

  // asscosation
  @ForeignKey(() => User)
  @Column({ field: 'user_id', type: DataType.UUID })
  user_id: string;

  @BelongsTo(() => User)
  user: User;
}
