import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-lien',
  templateUrl: './navigation-lien.component.html',
  styleUrls: ['./navigation-lien.component.scss']
})
export class NavigationLienComponent implements OnInit {
@Input() links: [];

  constructor() { }

  ngOnInit() {
  }

}
