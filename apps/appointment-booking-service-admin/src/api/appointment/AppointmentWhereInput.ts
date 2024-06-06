import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StaffWhereUniqueInput } from "../staff/StaffWhereUniqueInput";

export type AppointmentWhereInput = {
  customer?: CustomerWhereUniqueInput;
  dateTime?: DateTimeNullableFilter;
  id?: StringFilter;
  staff?: StaffWhereUniqueInput;
};
