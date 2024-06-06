import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StaffWhereUniqueInput } from "../staff/StaffWhereUniqueInput";

export type AppointmentCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  dateTime?: Date | null;
  staff?: StaffWhereUniqueInput | null;
};
