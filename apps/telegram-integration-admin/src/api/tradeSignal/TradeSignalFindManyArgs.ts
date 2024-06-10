import { TradeSignalWhereInput } from "./TradeSignalWhereInput";
import { TradeSignalOrderByInput } from "./TradeSignalOrderByInput";

export type TradeSignalFindManyArgs = {
  where?: TradeSignalWhereInput;
  orderBy?: Array<TradeSignalOrderByInput>;
  skip?: number;
  take?: number;
};
