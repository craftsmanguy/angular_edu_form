import { Component, Input, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';
import { State } from 'src/app/shared/enums/state.enum';


@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {

  @Input() order: Prestation;
  states = State;


  constructor(
    private ps: PrestationService
  ) { }

  ngOnInit() {
  }

  changeState(event) {
    this.ps.update(this.order, event.target.value);
  }

}
