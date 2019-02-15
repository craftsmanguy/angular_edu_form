import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  private Collection: Observable<Prestation[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Prestation>('prestations');
    this.collection = this.itemsCollection.valueChanges().pipe(
      map(data => {
        return data.map(item => {
          return new Prestation(item);
        });
      })
    );
  }

  get collection(): Observable<Prestation[]> {
    return this.Collection;
  }

  set collection(col: Observable<Prestation[]>) {
    this.Collection = col;
  }

  update(item: Prestation, state: State) {
    item.state = state;
  }

  add(item: Prestation) {
    // this.collection.push(new Prestation(item));
  }
}
