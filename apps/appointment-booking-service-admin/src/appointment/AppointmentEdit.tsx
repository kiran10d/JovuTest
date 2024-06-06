import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { CustomerTitle } from "../customer/CustomerTitle";
import { StaffTitle } from "../staff/StaffTitle";

export const AppointmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
