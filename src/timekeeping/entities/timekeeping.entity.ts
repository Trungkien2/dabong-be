import {
  Table,
  Column,
  Model,
  DataType,
  Default,
  AllowNull,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
import { Status } from 'src/core/contanst/timekeeping.enum';
import { User } from 'src/user/user.entity';
@Table({
  tableName: 'tbl_timekeeping',
})
export class Timekeeping extends Model<Timekeeping> {
  @PrimaryKey
  @AllowNull
  @Default(DataType.UUIDV1)
  @Column({
    type: DataType.UUID,
  })
  id: string;

  @Column({
    type: DataType.DATE,
  })
  start_at: Date;

  @Column({
    type: DataType.DATE,
  })
  end_at: Date;

  @Column({
    type: DataType.BIGINT,
    defaultValue: 0,
  })
  start_at_unix_timestamp: number;
  @Column({
    type: DataType.BIGINT,
    defaultValue: 0,
  })
  end_at_unix_timestamp: number;

  @Column({
    type: DataType.STRING,
    defaultValue: Status.PENDING,
    validate: {
      isIn: [[Status.PENDING, Status.APPROVED]],
    },
  })
  Status: string;

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
