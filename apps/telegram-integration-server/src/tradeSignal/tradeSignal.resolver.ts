import * as graphql from "@nestjs/graphql";
import { TradeSignalResolverBase } from "./base/tradeSignal.resolver.base";
import { TradeSignal } from "./base/TradeSignal";
import { TradeSignalService } from "./tradeSignal.service";

@graphql.Resolver(() => TradeSignal)
export class TradeSignalResolver extends TradeSignalResolverBase {
  constructor(protected readonly service: TradeSignalService) {
    super(service);
  }
}
