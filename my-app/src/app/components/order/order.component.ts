import { Component } from '@angular/core';
import { ServiceFirestoreService } from '../../services/service-firestore/service-firestore.service'
import { ServiceLocalService } from 'src/app/services/service-local/service-local.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  ordenes: {};

  constructor(public orderService: ServiceFirestoreService,
              public pedidoService: ServiceLocalService ) {

  this.orderService.getPedidos().subscribe((order: any) => {
  this.ordenes = order;
  })
}

pedidoListo(pedido: any){
  const pedidos = pedido
  this.pedidoService.pedidoListoDeCocinero(pedidos)
}

}
