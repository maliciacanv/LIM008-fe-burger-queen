import { Component, OnInit } from '@angular/core';
import { ServiceLocalService } from '../../services/service-local/service-local.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  name: string;
  today: any;

  public pedidoBreakfast: any[]= [];

  public total?: number;

  constructor( private serviceLocal: ServiceLocalService, 
    ) {
    this.serviceLocal.names.subscribe(nam => {
      return this.name = nam;
    });
    this.serviceLocal.desayunos.subscribe((breakfast: any) => {
      console.log(breakfast)
      return this.pedidoBreakfast = breakfast;
    })
   }
   
  public precioTotal: number;

  onCantidad(event,cantidadNueva:number){
    //  const hola = this.pedidoBreakfast.map(ele => 
    //   console.log(ele))
    //  this.precioTotal = cantidadNueva
     this.serviceLocal.changeCantidad(event,cantidadNueva)
   }
   
  ngOnInit() {

    this.today = new Date();

    this.total = this.pedidoBreakfast.reduce((antes,obj,) => 
     antes + (obj.cantidad*obj.precio),0);
    
      console.log("soy yo Total: ", this.total) 
  
  }
}

