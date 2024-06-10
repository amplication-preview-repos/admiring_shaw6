import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TradeSignalService } from "./tradeSignal.service";
import { TradeSignalControllerBase } from "./base/tradeSignal.controller.base";

@swagger.ApiTags("tradeSignals")
@common.Controller("tradeSignals")
export class TradeSignalController extends TradeSignalControllerBase {
  constructor(protected readonly service: TradeSignalService) {
    super(service);
  }
}
