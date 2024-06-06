import { AppointmentUpdateManyWithoutCustomersInput } from "./AppointmentUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutCustomersInput;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
};
