import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { Type } from 'src/app/shared/enums/type.enum';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  @Input() client: Client;
  types = Type;


  constructor(
    private ps: ClientService
  ) { }

  ngOnInit() {
  }

  changeState(event) {
    this.ps.update(this.client, event.target.value);
  }

}
