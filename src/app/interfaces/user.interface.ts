import { CompanyInterface } from "./company.interface";

export interface IUser {
  id: number;
  name: string;
  company: CompanyInterface;
}
