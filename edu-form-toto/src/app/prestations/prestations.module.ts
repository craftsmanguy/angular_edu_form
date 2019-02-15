import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FormPrestationComponent } from './components/form-prestation/form-prestation.component';
import { PrestationComponent } from './components/prestation/prestation.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { FormPrestaComponent } from './components/form-presta/form-presta.component';
import { DetailPrestationComponent } from './components/detail-prestation/detail-prestation.component';
import { CommentPrestationComponent } from './components/comment-prestation/comment-prestation.component';
import { PageEditPrestationComponent } from './pages/page-edit-prestation/page-edit-prestation.component';
import { EditPrestationComponent } from './containers/edit-prestation/edit-prestation.component';

@NgModule({
  declarations: [
    PagePrestationsComponent,
    ListPrestationsComponent,
    PrestationComponent,
    PageAddPrestationComponent,
    AddPrestationComponent,
    FormPrestationComponent,
    FormPrestaComponent,
    DetailPrestationComponent,
    CommentPrestationComponent,
    PageEditPrestationComponent,
    EditPrestationComponent
  ],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class PrestationsModule {}
