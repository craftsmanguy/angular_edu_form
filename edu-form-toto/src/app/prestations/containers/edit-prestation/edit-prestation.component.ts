import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-edit-prestation',
  templateUrl: './edit-prestation.component.html',
  styleUrls: ['./edit-prestation.component.scss']
})
export class EditPrestationComponent implements OnInit {

  order$: Observable<Prestation>;
  id: string;

  constructor(
    private prestationService: PrestationService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.order$ = this.prestationService.getPrestation(this.id);
    });
  }

  update(prestation: Prestation) {
    prestation.id = this.id;
    this.prestationService.update(prestation).then(data => {
      this.router.navigate(['prestations'], { relativeTo: this.route });
    });
  }

}
