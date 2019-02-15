import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  Renderer2,
  Output,
  EventEmitter
} from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  @Input() order: Prestation;
  @ViewChild('first') elem: ElementRef;
  @Output() clicked: EventEmitter <ElementRef> = new EventEmitter();
  states = State;

  constructor(private ps: PrestationService) {}

  ngOnInit() {}

  changeState(event) {
    const state = event.target.value;
    this.ps.update(this.order, state).then(data => {
      this.order.state = state;
    });
  }

  getDetail() {
    this.clicked.emit(this.elem);
    this.ps.detail$.next(this.order);
  }
}
