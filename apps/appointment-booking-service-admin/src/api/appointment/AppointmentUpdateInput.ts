import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StaffWhereUniqueInput } from "../staff/StaffWhereUniqueInput";

export type AppointmentUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  dateTime?: Date | null;
  staff?: StaffWhereUniqueInput | null;
};
