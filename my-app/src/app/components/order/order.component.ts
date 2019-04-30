import { Component, OnInit } from '@angular/core';
import { ServiceFirestoreService } from '../../services/service-firestore/service-firestore.service'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  ordenes: any;

  constructor(public orderService: ServiceFirestoreService ) {

  this.orderService.getPedidos().subscribe(order => {
  this.ordenes = order;
  console.log(this.ordenes)
 
  })
  }

  ngOnInit() {
  }

}
