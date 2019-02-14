import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {
  title = 'Prestation';
  paraph = 'Je suis dans les prestations';
  resource = 'add';
  action = 'ajouter une prestation' ;

  constructor() { }

  ngOnInit() {
  }

}
