import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TelegramConfigEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="apiHash" source="apiHash" />
        <TextInput label="apiId" source="apiId" />
        <TextInput label="phoneNumber" source="phoneNumber" />
      </SimpleForm>
    </Edit>
  );
};
