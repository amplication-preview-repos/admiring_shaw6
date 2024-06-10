import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TelegramConfigWhereInput = {
  apiHash?: StringNullableFilter;
  apiId?: StringNullableFilter;
  id?: StringFilter;
  phoneNumber?: StringNullableFilter;
};
