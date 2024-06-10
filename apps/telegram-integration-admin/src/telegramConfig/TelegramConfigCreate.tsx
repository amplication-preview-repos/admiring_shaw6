import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TelegramConfigCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="apiHash" source="apiHash" />
        <TextInput label="apiId" source="apiId" />
        <TextInput label="phoneNumber" source="phoneNumber" />
      </SimpleForm>
    </Create>
  );
};
