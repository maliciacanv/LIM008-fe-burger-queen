import { Component, OnInit } from '@angular/core';
import { ServiceFirestoreService } from '../../services/service-firestore/service-firestore.service';

@Component({
  selector: 'app-section-lunch',
  templateUrl: './section-lunch.component.html',
  styleUrls: ['./section-lunch.component.css']
})
export class SectionLunchComponent implements OnInit {
   
  almuerzos = [];
  adicionales = [];
  acompts= [];
  bebidas = [];

  constructor( public almuerzoService: ServiceFirestoreService) {
    
      this.almuerzoService.getMenus().subscribe(menus => {
      this.almuerzos = menus.filter((ele:any) => ele.tipo === 'almuerzo')
      this.adicionales = menus.filter((ele:any) => ele.tipo === 'adicional')
      this.acompts = menus.filter((ele:any) => ele.tipo ==='acompañamiento')
      this.bebidas = menus.filter((ele:any) => ele.tipo === 'bebidas')
    })
}

ngOnInit() {}

}
