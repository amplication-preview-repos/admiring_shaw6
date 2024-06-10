import { TradeSignal as TTradeSignal } from "../api/tradeSignal/TradeSignal";

export const TRADESIGNAL_TITLE_FIELD = "channelId";

export const TradeSignalTitle = (record: TTradeSignal): string => {
  return record.channelId?.toString() || String(record.id);
};
