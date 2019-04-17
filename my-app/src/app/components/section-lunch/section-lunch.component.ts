import { Component, OnInit } from '@angular/core';
import { ServiceFirestoreService } from '../../services/service-firestore/service-firestore.service';
import { ServiceLocalService } from '../../services/service-local/service-local.service';


@Component({
  selector: 'app-section-lunch',
  templateUrl: './section-lunch.component.html',
  styleUrls: ['./section-lunch.component.css']
})
export class SectionLunchComponent implements OnInit {
   
  almuerzos = [];
  adicionales = [];
  otros= [];

  constructor( public almuerzoService: ServiceFirestoreService,
               public menuServiceLocal: ServiceLocalService) {
    
      this.almuerzoService.getMenus().subscribe(menus => {
      this.almuerzos = menus.filter((ele:any) => ele.tipo === 'almuerzo')
      this.otros = menus.filter((ele:any) => ele.tipo ==='otros')
    })
}

clickPedidos(value: any){
  const newPedido = {
    ...value,
    cantidad: 1,
    precioTotal: value.precio
    };
  this.menuServiceLocal.getBreakfast(newPedido);
}


ngOnInit() {}

}
