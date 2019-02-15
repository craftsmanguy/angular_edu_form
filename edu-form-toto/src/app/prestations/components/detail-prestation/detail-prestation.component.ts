import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-detail-prestation',
  templateUrl: './detail-prestation.component.html',
  styleUrls: ['./detail-prestation.component.scss']
})
export class DetailPrestationComponent implements OnInit {
  detail$: Subject<Prestation>;

  constructor(private ps: PrestationService) {}

  ngOnInit() {
    this.detail$ = this.ps.detail$;
  }
}
