import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  resource = '/clients';
  action = 'liste des clients' ;

  constructor() { }

  ngOnInit() {
  }

}
