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
  id: string

  constructor(
    private prestationService: PrestationService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.order$ = this.prestationService.getPrestation(id);
    });
  }

  update(prestation: Prestation) {
    this.prestationService.update(prestation).then(data => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

}
