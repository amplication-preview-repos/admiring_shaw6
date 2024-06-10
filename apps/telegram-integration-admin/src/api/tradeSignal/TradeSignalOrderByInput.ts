import { SortOrder } from "../../util/SortOrder";

export type TradeSignalOrderByInput = {
  channelId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  signal?: SortOrder;
  updatedAt?: SortOrder;
};
