import { AppointmentCreateNestedManyWithoutStaffItemsInput } from "./AppointmentCreateNestedManyWithoutStaffItemsInput";

export type StaffCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutStaffItemsInput;
  email?: string | null;
  name?: string | null;
};
