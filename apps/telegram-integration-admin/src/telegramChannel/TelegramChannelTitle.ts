import { TelegramChannel as TTelegramChannel } from "../api/telegramChannel/TelegramChannel";

export const TELEGRAMCHANNEL_TITLE_FIELD = "channelName";

export const TelegramChannelTitle = (record: TTelegramChannel): string => {
  return record.channelName?.toString() || String(record.id);
};
