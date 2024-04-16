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
import { Status } from 'src/core/contanst/timekeeping.enum';
import { User } from 'src/user/user.entity';

@Table({
  tableName: 'tbl_new',
})
export class News extends Model<News> {
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
  title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.STRING,
    defaultValue: Status.PENDING,
    validate: {
      isIn: [[Status.PENDING, Status.APPROVED]],
    },
  })
  role: Status;

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

  @ForeignKey(() => User)
  @Column({ field: 'user_id', type: DataType.UUID })
  user_id: string;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => User)
  @Column({ field: 'admin_id', type: DataType.UUID })
  admin_id: string;

  @BelongsTo(() => User)
  admin: User;
}
