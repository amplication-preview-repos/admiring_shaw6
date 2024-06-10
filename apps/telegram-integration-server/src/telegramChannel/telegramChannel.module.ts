import { Module } from "@nestjs/common";
import { TelegramChannelModuleBase } from "./base/telegramChannel.module.base";
import { TelegramChannelService } from "./telegramChannel.service";
import { TelegramChannelController } from "./telegramChannel.controller";
import { TelegramChannelResolver } from "./telegramChannel.resolver";

@Module({
  imports: [TelegramChannelModuleBase],
  controllers: [TelegramChannelController],
  providers: [TelegramChannelService, TelegramChannelResolver],
  exports: [TelegramChannelService],
})
export class TelegramChannelModule {}
