import { Type } from '../enums/type.enum';
import { ClientsI } from '../interfaces/clients-i';

export class Client implements ClientsI {
  id: string;
  name: string;
  email: string;
  type = Type.ACTIF;

  constructor(fields?: Partial<Client>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }

}
