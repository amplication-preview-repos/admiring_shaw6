import * as graphql from "@nestjs/graphql";
import { TelegramConfigResolverBase } from "./base/telegramConfig.resolver.base";
import { TelegramConfig } from "./base/TelegramConfig";
import { TelegramConfigService } from "./telegramConfig.service";

@graphql.Resolver(() => TelegramConfig)
export class TelegramConfigResolver extends TelegramConfigResolverBase {
  constructor(protected readonly service: TelegramConfigService) {
    super(service);
  }
}
