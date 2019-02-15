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
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


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
  faEdit = faEdit;

  constructor(
    private ps: PrestationService,
    private router: Router) {}

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

  goToDetail() {
    this.router.navigate(['prestations/edit', this.order.id]);
  }
}
