import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {
  constructor(
    private prestationService: PrestationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  add(prestation: Prestation) {
    this.prestationService.add(prestation).then(data => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });

    this.prestationService.add(prestation).then(data => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}
