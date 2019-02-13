import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { Type } from 'src/app/shared/enums/type.enum';
import { FakeClients } from '../../shared/fakes/fake-clients';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private Collection: Client[];

  constructor() {
    this.collection = FakeClients;
  }

  get collection(): Client[] {
    return this.Collection;
  }

  set collection(col: Client[]) {
    this.Collection = col;
  }

  update(client: Client, type: Type) {
    client.type = type;
  }
}
