import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { StaffTitle } from "../staff/StaffTitle";

export const AppointmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <DateTimeInput label="dateTime" source="dateTime" />
        <ReferenceInput source="staff.id" reference="Staff" label="Staff">
          <SelectInput optionText={StaffTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
