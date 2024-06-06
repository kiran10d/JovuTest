import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  dateTime?: SortOrder;
  id?: SortOrder;
  staffId?: SortOrder;
  updatedAt?: SortOrder;
};
