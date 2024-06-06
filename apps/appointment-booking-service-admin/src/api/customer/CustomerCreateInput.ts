import { AppointmentCreateNestedManyWithoutCustomersInput } from "./AppointmentCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutCustomersInput;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
};
