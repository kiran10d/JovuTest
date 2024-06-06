import { Customer } from "../customer/Customer";
import { Staff } from "../staff/Staff";

export type Appointment = {
  createdAt: Date;
  customer?: Customer | null;
  dateTime: Date | null;
  id: string;
  staff?: Staff | null;
  updatedAt: Date;
};
