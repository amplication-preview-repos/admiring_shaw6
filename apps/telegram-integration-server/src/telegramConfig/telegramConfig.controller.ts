import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TelegramConfigService } from "./telegramConfig.service";
import { TelegramConfigControllerBase } from "./base/telegramConfig.controller.base";

@swagger.ApiTags("telegramConfigs")
@common.Controller("telegramConfigs")
export class TelegramConfigController extends TelegramConfigControllerBase {
  constructor(protected readonly service: TelegramConfigService) {
    super(service);
  }
}
