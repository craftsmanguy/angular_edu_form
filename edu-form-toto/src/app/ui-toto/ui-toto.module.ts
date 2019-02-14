import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoderbaseUiModule } from '@coderbase/ui';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { UiTotoComponent } from './containers/ui-toto/ui-toto.component';



@NgModule({
  declarations: [UiTotoComponent, FooterComponent, HeaderComponent, NavComponent],
  imports: [
    CommonModule, CoderbaseUiModule, RouterModule
  ],
  exports: [UiTotoComponent]
})
export class UiTotoModule { }
