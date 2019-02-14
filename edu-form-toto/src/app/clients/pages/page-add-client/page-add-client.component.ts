import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {
  title = 'Clients';
  paraph = 'Ici on aime bien les gentils clients';

  constructor() { }

  ngOnInit() {
  }

}
