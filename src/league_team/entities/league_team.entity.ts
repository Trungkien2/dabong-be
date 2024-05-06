import {
  AllowNull,
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { League } from 'src/league/entities/league.entity';
import { Team } from 'src/team/entities/team.entity';

@Table({
  tableName: 'tbl_league_team',
})
export class LeagueTeam extends Model<LeagueTeam> {
  @PrimaryKey
  @AllowNull
  @Default(DataType.UUIDV1)
  @Column({
    type: DataType.UUID,
  })
  id: string;
  @ForeignKey(() => Team)
  @Column({ field: 'team_id', type: DataType.UUID })
  team_id: string;

  @ForeignKey(() => League)
  @Column({ field: 'league_id', type: DataType.UUID })
  league_id: string;

  @BelongsTo(() => Team)
  team: Team;

  @BelongsTo(() => League)
  league: League;

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
}
