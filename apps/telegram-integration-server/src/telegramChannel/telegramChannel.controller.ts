import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TelegramChannelService } from "./telegramChannel.service";
import { TelegramChannelControllerBase } from "./base/telegramChannel.controller.base";

@swagger.ApiTags("telegramChannels")
@common.Controller("telegramChannels")
export class TelegramChannelController extends TelegramChannelControllerBase {
  constructor(protected readonly service: TelegramChannelService) {
    super(service);
  }
}
