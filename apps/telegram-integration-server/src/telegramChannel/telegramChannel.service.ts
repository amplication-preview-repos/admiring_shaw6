import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TelegramChannelServiceBase } from "./base/telegramChannel.service.base";

@Injectable()
export class TelegramChannelService extends TelegramChannelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
