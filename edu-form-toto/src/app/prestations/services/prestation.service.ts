import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  private Collection: Observable<Prestation[]>;
  // detail$: Subject<Prestation> = new Subject();
  detail$: BehaviorSubject<Prestation> = new BehaviorSubject(undefined);

  constructor(private afs: AngularFirestore, private http: HttpClient) {
    this.itemsCollection = afs.collection<Prestation>('prestations');
    this.collection = this.itemsCollection.valueChanges().pipe(
      map(data => {
        this.detail$.next(data[0]);
        return data.map(item => {
          return new Prestation(item);
        });
      })
    );
    // this.collection = this.http.get<Prestation[]>(`${API_URL}/prestations`).pipe(
    //   map(data => data.map(item =>))
    // )
  }

  get collection(): Observable<Prestation[]> {
    return this.Collection;
  }

  set collection(col: Observable<Prestation[]>) {
    this.Collection = col;
  }

  // add presta

  add(item: Prestation): Promise<any> {
    const id = this.afs.createId();

    const prestation = { id, ...item };

    return this.itemsCollection
      .doc(id)
      .set(prestation)
      .catch(e => {
        console.log(e);
      });

    // return this.http.post('urlapi/addprestation', item);
  }

  update(item: Prestation, state?: State): Promise<any> {
    const presta = { ...item }; // déstructure l'obj pour le copier dans un nouvel objet

    if (state) {
      presta.state = state;
    }

    return this.itemsCollection
      .doc(item.id)
      .update(presta)
      .catch(e => {
        console.log(e);
      });

    // return this.http.patch('urlapi/prestationupdate/'+item.id, presta);
  }

  delete(item: Prestation): Promise<any> {
    return this.itemsCollection
      .doc(item.id)
      .delete()
      .catch(e => {
        console.log(e);
      });

    // return this.http.delete(`urlapi/prestations/delete/${item.id}`);
  }

  getPrestation(id: string): Observable<Prestation> {
    return this.itemsCollection.doc<Prestation>(id).valueChanges();
    // return this.http.get(${API_URL}/prestations/${id});
  }
}
