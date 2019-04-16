import { Component, OnInit } from '@angular/core';
import { ServiceFirestoreService } from '../../services/service-firestore/service-firestore.service';
import { ServiceLocalService } from '../../services/service-local/service-local.service';
// import { filter } from 'rxjs/operators';
// import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-section-breackfast',
  templateUrl: './section-breackfast.component.html',
  styleUrls: ['./section-breackfast.component.css']
})
export class SectionBreackfastComponent implements OnInit { 
  
  desayunos = []
  pedidosDesayuno = {}

  constructor( public menusService: ServiceFirestoreService,
               public desayunosService: ServiceLocalService ) 
  {
      this.menusService.getMenus().subscribe(menus => {
      this.desayunos = menus.filter((ele: any) => ele.tipo === 'desayuno')
      })

      this.desayunosService.desayunos.subscribe(desayun => {
        this.pedidosDesayuno = desayun;
      })
   }
  
  ngOnInit() {}

  clickPedidos(value: object){
    console.log(value)
    const newPedido = {
      ...value,
      cantidad: 1,
      precioTotal: 0
      };
      console.log(newPedido)
    this.desayunosService.getBreakfast(newPedido);
  }

}

