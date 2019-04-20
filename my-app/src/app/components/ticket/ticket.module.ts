import { NgModule } from '@angular/core';
import { TicketComponent } from './ticket.component';
import { ServiceLocalService } from '../../services/service-local/service-local.service';



@NgModule({
    declarations: [
        TicketComponent
    ],
    imports: [
        ServiceLocalService
    ],
    exports: [
        TicketComponent
    ],
    providers: [
    ],
    bootstrap: []
  })
  export class TicketModule { }