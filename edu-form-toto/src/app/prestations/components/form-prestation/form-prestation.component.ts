import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {

  @Output() order: EventEmitter<Prestation> = new EventEmitter();
  states = State;
  init = new Prestation();

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.order.emit(this.init);
  }
}
