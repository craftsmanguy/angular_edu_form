import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {
  collection: Client[];
  headers = [
    'id',
    'name',
    'email',
    'type'
  ];
  resource = 'add';
  action = 'ajouter un client' ;

  constructor(private clientS: ClientService) {}

  ngOnInit() {
    this.collection = this.clientS.collection;
  }
}
