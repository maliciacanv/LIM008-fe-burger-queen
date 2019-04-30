import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore'

//rutas
import { APP_ROUTING } from './app.routes';

//servicios
import { ServiceFirestoreService } from './services/service-firestore/service-firestore.service';
import { ServiceLocalService} from './services/service-local/service-local.service';

//componentes
import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component'
import { SectionTwoComponent } from './components/section-two/section-two.component';
import { SectionBreakfastComponent } from './components/section-breakfast/section-breakfast.component';
import { SectionLunchComponent } from './components/section-lunch/section-lunch.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { OrderComponent } from './components/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    SectionTwoComponent,
    SectionBreakfastComponent,
    SectionLunchComponent,
    TicketComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ServiceFirestoreService,
    ServiceLocalService
  ],
  bootstrap: [AppComponent]  
})
export class AppModule { }
