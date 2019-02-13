import { State } from '../enums/state.enum';
import { Client } from '../models/client.model';

export interface PrestationsI {
  id: string;
  typePresta: string;
  client: Client;
  tjmHt: number;
  nbJours: number;
  tauxTva: number;
  comment: string;
  state: State;
  totalHT(): number;
  totalTTC(): number;
}
