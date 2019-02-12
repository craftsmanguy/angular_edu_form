import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoderbaseUiModule} from '@coderbase/ui';
import { UiTotoComponent } from './containers/ui-toto/ui-toto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [UiTotoComponent, FooterComponent, HeaderComponent, NavComponent],
  imports: [
    CommonModule, CoderbaseUiModule, RouterModule
  ],
  exports: [UiTotoComponent]
})
export class UiTotoModule { }
