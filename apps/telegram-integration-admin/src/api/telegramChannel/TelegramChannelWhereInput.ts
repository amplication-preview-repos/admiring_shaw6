import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TelegramChannelWhereInput = {
  channelId?: StringNullableFilter;
  channelName?: StringNullableFilter;
  id?: StringFilter;
};
