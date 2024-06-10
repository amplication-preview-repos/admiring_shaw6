import * as graphql from "@nestjs/graphql";
import { TelegramChannelResolverBase } from "./base/telegramChannel.resolver.base";
import { TelegramChannel } from "./base/TelegramChannel";
import { TelegramChannelService } from "./telegramChannel.service";

@graphql.Resolver(() => TelegramChannel)
export class TelegramChannelResolver extends TelegramChannelResolverBase {
  constructor(protected readonly service: TelegramChannelService) {
    super(service);
  }
}
