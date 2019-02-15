import {
  Component,
  OnDestroy,
  OnInit,
  Renderer2,
  ElementRef
} from '@angular/core';
import { Observable } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit, OnDestroy {
  // collection: Prestation[];
  collection$: Observable<Prestation[]>;
  oldElement: ElementRef;
  // private sub: Subscription;
  headers = [
    'type',
    'client',
    'nb jours',
    'tjm ht',
    'total ht',
    'total ttc',
    'state',
    'édition'
  ];

  constructor(private ps: PrestationService, private renderer: Renderer2) {}

  ngOnInit() {
    // this.sub = this.ps.collection.subscribe(data => {
    //   this.collection = data;
    // });
    this.collection$ = this.ps.collection;
  }

  colorTd(element) {
    if (this.oldElement) {
      this.renderer.removeClass(this.oldElement.nativeElement, 'active');
    }
    this.oldElement = element;
    this.renderer.addClass(element.nativeElement, 'active');
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
