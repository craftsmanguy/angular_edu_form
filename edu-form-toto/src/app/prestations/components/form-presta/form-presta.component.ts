import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-presta',
  templateUrl: './form-presta.component.html',
  styleUrls: ['./form-presta.component.scss']
})
export class FormPrestaComponent implements OnInit {
  @Output() order: EventEmitter<Prestation> = new EventEmitter();
  form: FormGroup;
  states = State;
  init = new Prestation();

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      typePresta: [this.init.typePresta, [Validators.required]],
      client: [this.init.client, [Validators.required, Validators.minLength(3)]],
      tjmHt: [this.init.tjmHt, []],
      nbJours: [this.init.nbJours, []],
      tauxTva: [this.init.tauxTva, []],
      comment: [this.init.comment, []],
      state: [this.init.state, []]
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.order.emit(this.form.value);
  }
}
