import { Component, OnInit } from '@angular/core';
import { CoderbaseUiService } from '@coderbase/ui';


@Component({
  selector: 'app-ui-toto',
  templateUrl: './ui-toto.component.html',
  styleUrls: ['./ui-toto.component.scss']
})
export class UiTotoComponent implements OnInit {

  constructor(
    private uiService: CoderbaseUiService
    ) { }

  ngOnInit() {
  }

}
