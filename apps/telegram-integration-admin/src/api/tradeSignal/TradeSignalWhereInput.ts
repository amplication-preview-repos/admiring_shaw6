import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TradeSignalWhereInput = {
  channelId?: StringNullableFilter;
  id?: StringFilter;
  signal?: StringNullableFilter;
};
