import { TelegramConfig as TTelegramConfig } from "../api/telegramConfig/TelegramConfig";

export const TELEGRAMCONFIG_TITLE_FIELD = "apiHash";

export const TelegramConfigTitle = (record: TTelegramConfig): string => {
  return record.apiHash?.toString() || String(record.id);
};
