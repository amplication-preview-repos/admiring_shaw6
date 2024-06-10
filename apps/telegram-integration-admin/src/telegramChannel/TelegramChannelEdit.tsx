import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TelegramChannelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="channelId" source="channelId" />
        <TextInput label="channelName" source="channelName" />
      </SimpleForm>
    </Edit>
  );
};
