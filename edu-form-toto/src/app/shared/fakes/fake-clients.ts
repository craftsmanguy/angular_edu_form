import { Client } from 'src/app/shared/models/client.model';

export const FakeClients: Client[] = [
  new Client({
    id: 'toto001',
    name: 'Jean',
    email: 'jean@cap',
  }),
  new Client({
    id: 'toto002',
    name: 'Jacques',
    email: 'jacques@atos',
  }),
  new Client({
    id: 'toto003',
    name: 'Pierre',
    email: 'lumiere@Edf',
  })
];
