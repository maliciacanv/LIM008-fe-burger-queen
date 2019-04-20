import { NgModule } from '@angular/core';
import { SectionTwoComponent } from  './section-two.component';
import { TicketComponent } from '../ticket/ticket.component';
import { SectionBreackfastComponent } from '../section-breackfast/section-breackfast.component'
import { SectionLunchComponent } from '../section-lunch/section-lunch.component'

@NgModule({
    declarations: [
        SectionTwoComponent,
    ],
    imports: [
        TicketComponent,
        SectionBreackfastComponent,
        SectionLunchComponent
    ],
    exports: [
        SectionTwoComponent
    ],
    providers: [
    ],
    bootstrap: []
  })
  export class SectionTwoModule { }
  