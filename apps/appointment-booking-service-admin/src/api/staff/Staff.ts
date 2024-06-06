import { Appointment } from "../appointment/Appointment";

export type Staff = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
