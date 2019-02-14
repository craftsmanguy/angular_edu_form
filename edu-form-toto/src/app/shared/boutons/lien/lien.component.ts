import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lien',
  templateUrl: './lien.component.html',
  styleUrls: ['./lien.component.scss']
})
export class LienComponent implements OnInit {
  @Input() resource: string;
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
