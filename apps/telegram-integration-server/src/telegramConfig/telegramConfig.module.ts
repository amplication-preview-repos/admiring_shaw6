import { Module } from "@nestjs/common";
import { TelegramConfigModuleBase } from "./base/telegramConfig.module.base";
import { TelegramConfigService } from "./telegramConfig.service";
import { TelegramConfigController } from "./telegramConfig.controller";
import { TelegramConfigResolver } from "./telegramConfig.resolver";

@Module({
  imports: [TelegramConfigModuleBase],
  controllers: [TelegramConfigController],
  providers: [TelegramConfigService, TelegramConfigResolver],
  exports: [TelegramConfigService],
})
export class TelegramConfigModule {}
