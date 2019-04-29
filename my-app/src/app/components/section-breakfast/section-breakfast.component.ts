import { Component, OnInit } from '@angular/core';
import { ServiceFirestoreService } from '../../services/service-firestore/service-firestore.service';
import { ServiceLocalService } from '../../services/service-local/service-local.service';

@Component({
  selector: 'app-section-breakfast',
  templateUrl: './section-breakfast.component.html',
  styleUrls: ['./section-breakfast.component.css']
})
export class SectionBreakfastComponent implements OnInit { 
  
  desayunos = []
  pedidosDesayuno = {}

  constructor( public menusService: ServiceFirestoreService,
               public menuServiceLocal: ServiceLocalService ) 
  {
    this.menusService.getMenus().subscribe(menus => {
    this.desayunos = menus.filter((ele: any) => ele.tipo === 'desayuno')
    })
    this.menuServiceLocal.menus.subscribe(desayuno => {
    this.pedidosDesayuno = desayuno;
    })
  }  
  
  ngOnInit() {}

  clickPedidos(value: any, i){
    const newPedido = {
      ...value,
      id: i,
      cantidad: 1,
      precioTotal: value.precio
      };
    this.menuServiceLocal.getBreakfast(newPedido);
  }

}

