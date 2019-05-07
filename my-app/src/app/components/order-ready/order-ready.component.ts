import { Component } from '@angular/core';
import { ServiceLocalService } from 'src/app/services/service-local/service-local.service';

@Component({
  selector: 'app-order-ready',
  templateUrl: './order-ready.component.html',
  styleUrls: ['./order-ready.component.css']
})
export class OrderReadyComponent {

  pedidoListo: any;

  constructor( private serviceLocal: ServiceLocalService) {

    this.serviceLocal.pedidos.subscribe(data => {
     this.pedidoListo = data;
    console.log(this.pedidoListo)
    })

   }


}
