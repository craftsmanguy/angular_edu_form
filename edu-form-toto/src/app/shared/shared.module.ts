import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableauComponent } from './containers/tableau/tableau.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TypeDirective } from './directives/type.directive';

@NgModule({
  declarations: [TotalPipe, TableauComponent, StateDirective, TypeDirective],
  imports: [
    CommonModule
  ],
  exports: [TotalPipe, TableauComponent, StateDirective, TypeDirective]
})
export class SharedModule { }
