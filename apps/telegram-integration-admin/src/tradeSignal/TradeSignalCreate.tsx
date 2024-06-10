import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TradeSignalCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="channelId" source="channelId" />
        <TextInput label="signal" multiline source="signal" />
      </SimpleForm>
    </Create>
  );
};
