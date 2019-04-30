import { Component } from '@angular/core';
import { ServiceFirestoreService } from '../../services/service-firestore/service-firestore.service'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  ordenes: any;

  constructor(public orderService: ServiceFirestoreService ) {

  this.orderService.getPedidos().subscribe(order => {
  this.ordenes = order;
 
  })
  }

 
}
