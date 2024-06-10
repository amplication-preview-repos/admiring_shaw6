import { TelegramChannelWhereInput } from "./TelegramChannelWhereInput";
import { TelegramChannelOrderByInput } from "./TelegramChannelOrderByInput";

export type TelegramChannelFindManyArgs = {
  where?: TelegramChannelWhereInput;
  orderBy?: Array<TelegramChannelOrderByInput>;
  skip?: number;
  take?: number;
};
