import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { ServiceLocalService } from '../../services/service-local/service-local.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  name: string;
  today: any;

  public pedidoBreakfast = {};

  constructor( private serviceLocal: ServiceLocalService, 
    ) {
    this.serviceLocal.names.subscribe(nam => {
      this.name = nam;
    });

    this.serviceLocal.desayunos.subscribe((breakfast: any) => {
    
      this.pedidoBreakfast = breakfast;
      console.log(this.pedidoBreakfast)
    })

   }

  ngOnInit() {

    this.today = new Date();

  }


}

