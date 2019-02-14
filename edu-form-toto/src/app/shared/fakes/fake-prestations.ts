import { Prestation } from 'src/app/shared/models/prestation.model';
import { Client } from '../models/client.model';

export const FakePrestations: Prestation[] = [
  new Prestation({
    id: 'guy001',
    typePresta: 'Formation',
    client: 'Jean',
    tjmHt: 3000,
    nbJours: 25,
    comment: 'Merci Cap'
  }),
  new Prestation({
    id: 'guy002',
    typePresta: 'Lead Dev',
    client: 'Jacques',
    tjmHt: 3500,
    nbJours: 20,
    comment: 'Merci Atos pour ces 20j à 3.5k'
  }),
  new Prestation({
    id: 'guy001',
    typePresta: 'EM',
    client: 'Pierre',
    tjmHt: 4000,
    nbJours: 30,
    comment: 'Merci Edf pour ces 30j à 4k'
  })
];
