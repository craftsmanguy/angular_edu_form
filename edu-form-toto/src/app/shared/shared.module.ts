import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableauComponent } from './containers/tableau/tableau.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TypeDirective } from './directives/type.directive';
import { TemplatesModule } from '../templates/templates.module';
import { LienComponent } from './boutons/lien/lien.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TotalPipe, TableauComponent, StateDirective, TypeDirective, LienComponent],
  imports: [
    CommonModule,
    TemplatesModule,
    RouterModule
  ],
  exports: [TotalPipe, TableauComponent, StateDirective, TypeDirective, TemplatesModule, LienComponent]
})
export class SharedModule { }
