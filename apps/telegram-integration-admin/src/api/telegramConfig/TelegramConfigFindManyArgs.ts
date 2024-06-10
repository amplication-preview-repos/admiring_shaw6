import { TelegramConfigWhereInput } from "./TelegramConfigWhereInput";
import { TelegramConfigOrderByInput } from "./TelegramConfigOrderByInput";

export type TelegramConfigFindManyArgs = {
  where?: TelegramConfigWhereInput;
  orderBy?: Array<TelegramConfigOrderByInput>;
  skip?: number;
  take?: number;
};
