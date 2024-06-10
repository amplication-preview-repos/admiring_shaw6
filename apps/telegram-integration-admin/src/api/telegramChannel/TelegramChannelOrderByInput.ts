import { SortOrder } from "../../util/SortOrder";

export type TelegramChannelOrderByInput = {
  channelId?: SortOrder;
  channelName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
