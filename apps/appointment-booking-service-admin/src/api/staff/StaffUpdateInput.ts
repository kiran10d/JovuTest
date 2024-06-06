import { AppointmentUpdateManyWithoutStaffItemsInput } from "./AppointmentUpdateManyWithoutStaffItemsInput";

export type StaffUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutStaffItemsInput;
  email?: string | null;
  name?: string | null;
};
