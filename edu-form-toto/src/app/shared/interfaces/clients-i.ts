import { Type } from '../enums/type.enum';

export interface ClientsI {
  id: string;
  name: string;
  email: string;
  type: Type;
}
