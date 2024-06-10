import { Module } from "@nestjs/common";
import { TradeSignalModuleBase } from "./base/tradeSignal.module.base";
import { TradeSignalService } from "./tradeSignal.service";
import { TradeSignalController } from "./tradeSignal.controller";
import { TradeSignalResolver } from "./tradeSignal.resolver";

@Module({
  imports: [TradeSignalModuleBase],
  controllers: [TradeSignalController],
  providers: [TradeSignalService, TradeSignalResolver],
  exports: [TradeSignalService],
})
export class TradeSignalModule {}
