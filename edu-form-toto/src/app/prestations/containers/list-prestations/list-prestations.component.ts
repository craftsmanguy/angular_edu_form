import { Component, OnInit, OnDestroy } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit, OnDestroy {
  // collection: Prestation[];
  collection$: Observable<Prestation[]>;
  // private sub: Subscription;
  headers = [
    'type',
    'client',
    'nb jours',
    'tjm ht',
    'total ht',
    'total ttc',
    'state'
  ];

  constructor(private ps: PrestationService) {}

  ngOnInit() {
    // this.sub = this.ps.collection.subscribe(data => {
    //   this.collection = data;
    // });
    this.collection$ = this.ps.collection;
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
