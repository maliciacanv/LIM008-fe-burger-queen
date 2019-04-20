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
  pedidoMenus: any[]= [];
  montoTot: number;

  constructor( private serviceLocal: ServiceLocalService,)
  {
    this.serviceLocal.names.subscribe(nam => {
      return this.name = nam;
    });
    this.serviceLocal.menus.subscribe((breakfast: any) => {
      console.log(breakfast)
      return this.pedidoMenus = breakfast;
    });
    this.serviceLocal.montoTotal.subscribe((total: number) => {
      return this.montoTot = total;
    })
  }
   
  onCantidad(event,cantidadNueva:number){
     this.serviceLocal.changeCantidad(event,cantidadNueva)
  }

  eliminar(nombre: string){
  this.serviceLocal.updateProduct(nombre)
  }

  enviarPedido(date: any, montoTot: number){
    if(confirm('¿Haz verificado la orden del cliente?') === true ){
      this.serviceLocal.ordenesListo(date, montoTot)
    }else{
      alert('Tu pedido no se ha enviado a cocina')
    }
  
  }

  

  ngOnInit() {
    this.today = new Date();
  }
}

