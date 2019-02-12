import { PrestationsI } from '../interfaces/prestations-i';
import { State } from '../enums/state.enum';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export class Prestation implements PrestationsI {
  id: string;
  typePresta: string;
  client: string;
  tjmHt = 0;
  nbJours: number;
  tauxTva = 0;
  comment: string;
  state = State.OPTION;

  constructor(fields?: Partial<Prestation>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
  totalHT(): number {
    return this.nbJours * this.tjmHt;
  }
  totalTTC(tva?: number): number {
    if (!tva) {
      return this.totalHT() * (1 + this.tauxTva / 100);
    }
    if (tva <= 0) {
      return this.totalHT();
    }
    return this.totalHT() * (1 + tva / 100);
  }
}
