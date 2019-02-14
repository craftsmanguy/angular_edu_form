import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { FakePrestations } from '../../shared/fakes/fake-prestations';
import { State } from 'src/app/shared/enums/state.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private Collection: Prestation[];

  constructor() {
    this.collection = FakePrestations;
  }

  get collection(): Prestation[] {
    return this.Collection;
  }

  set collection(col: Prestation[]) {
    this.Collection = col;
  }

  update(item: Prestation, state: State) {
    item.state = state;
  }

  add(item: Prestation) {
    this.collection.push(new Prestation(item));
  }
}
