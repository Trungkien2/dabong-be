import {
  AllowNull,
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { StatusFootball } from 'src/core/contanst/timekeeping.enum';
import { Team } from 'src/team/entities/team.entity';

@Table({
  tableName: 'tbl_football_match',
})
export class FootballMatch extends Model<FootballMatch> {
  @PrimaryKey
  @AllowNull
  @Default(DataType.UUIDV1)
  @Column({
    type: DataType.UUID,
  })
  id: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 0,
  })
  score_team_a: number;
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 0,
  })
  score_team_b: number;

  @Column({
    type: DataType.STRING,
    defaultValue: StatusFootball.WAITING,
    validate: {
      isIn: [
        [
          StatusFootball.CANCEL,
          StatusFootball.IN_PROGESS,
          StatusFootball.WAITING,
        ],
      ],
    },
  })
  status: StatusFootball;

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

  @ForeignKey(() => Team)
  @Column({ field: 'team_a_id', type: DataType.UUID })
  team_a_id: string;

  @BelongsTo(() => Team)
  team_a: Team;

  @ForeignKey(() => Team)
  @Column({ field: 'team_b_id', type: DataType.UUID })
  team_b_id: string;

  @BelongsTo(() => Team, { foreignKey: 'team_b_id', as: 'team_b' })
  team_b: Team;
}
