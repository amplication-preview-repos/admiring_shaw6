/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, TradeSignal as PrismaTradeSignal } from "@prisma/client";

export class TradeSignalServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TradeSignalCountArgs, "select">
  ): Promise<number> {
    return this.prisma.tradeSignal.count(args);
  }

  async tradeSignals<T extends Prisma.TradeSignalFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TradeSignalFindManyArgs>
  ): Promise<PrismaTradeSignal[]> {
    return this.prisma.tradeSignal.findMany<Prisma.TradeSignalFindManyArgs>(
      args
    );
  }
  async tradeSignal<T extends Prisma.TradeSignalFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TradeSignalFindUniqueArgs>
  ): Promise<PrismaTradeSignal | null> {
    return this.prisma.tradeSignal.findUnique(args);
  }
  async createTradeSignal<T extends Prisma.TradeSignalCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TradeSignalCreateArgs>
  ): Promise<PrismaTradeSignal> {
    return this.prisma.tradeSignal.create<T>(args);
  }
  async updateTradeSignal<T extends Prisma.TradeSignalUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TradeSignalUpdateArgs>
  ): Promise<PrismaTradeSignal> {
    return this.prisma.tradeSignal.update<T>(args);
  }
  async deleteTradeSignal<T extends Prisma.TradeSignalDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TradeSignalDeleteArgs>
  ): Promise<PrismaTradeSignal> {
    return this.prisma.tradeSignal.delete(args);
  }
}
