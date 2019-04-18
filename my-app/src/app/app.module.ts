import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore'

//rutas
import { APP_ROUTING } from './app-routes';

//servicios
import { ServiceFirestoreService } from './services/service-firestore/service-firestore.service';
import { ServiceLocalService} from './services/service-local/service-local.service';


//componentes
import { AppComponent } from './app.component';
import { SectionOneComponent } from './components/section-one/section-one.component';
import { SectionTwoComponent } from './components/section-two/section-two.component';
import { SectionBreackfastComponent } from './components/section-breackfast/section-breackfast.component';
import { SectionLunchComponent } from './components/section-lunch/section-lunch.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { SectionDinnerComponent } from './components/section-dinner/section-dinner.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionBreackfastComponent,
    SectionLunchComponent,
    TicketComponent,
    SectionDinnerComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],

  providers: [
    ServiceFirestoreService,
    ServiceLocalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
