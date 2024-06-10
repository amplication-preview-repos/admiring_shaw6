import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TelegramConfigServiceBase } from "./base/telegramConfig.service.base";

@Injectable()
export class TelegramConfigService extends TelegramConfigServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
