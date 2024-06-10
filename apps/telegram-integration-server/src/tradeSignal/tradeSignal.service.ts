import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TradeSignalServiceBase } from "./base/tradeSignal.service.base";

@Injectable()
export class TradeSignalService extends TradeSignalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
