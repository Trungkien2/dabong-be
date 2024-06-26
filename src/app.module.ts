import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';

import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { AllExceptionsFilter } from './core/filter/all-exception.filter';
import { LogsMiddleware, QueryMiddleware } from './core/middlewares';
import { allModule } from './router';
import { NewsModule } from './news/news.module';
import { TeamModule } from './team/team.module';
import { FootballMatchModule } from './football_match/football_match.module';
import { LeagueModule } from './league/league.module';
import { LeagueTeamModule } from './league_team/league_team.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    // RouterModule.register(ApiRoute),
    ...allModule,
    AuthModule,
    NewsModule,
    TeamModule,
    FootballMatchModule,
    LeagueModule,
    LeagueTeamModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(QueryMiddleware, LogsMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
