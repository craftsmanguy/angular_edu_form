import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UiTotoModule } from './ui-toto/ui-toto.module';
import { ClientsModule } from './clients/clients.module';
import { LoginModule } from './login/login.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiTotoModule,
    ClientsModule,
    LoginModule,
    PageNotFoundModule,
    SharedModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
