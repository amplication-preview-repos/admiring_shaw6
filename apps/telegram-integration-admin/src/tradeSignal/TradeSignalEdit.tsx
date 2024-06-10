import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TradeSignalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="channelId" source="channelId" />
        <TextInput label="signal" multiline source="signal" />
      </SimpleForm>
    </Edit>
  );
};
