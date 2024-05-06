import { PartialType } from '@nestjs/swagger';
import { CreateFootballMatchDto } from './create-football_match.dto';

export class UpdateFootballMatchDto extends PartialType(CreateFootballMatchDto) {}
