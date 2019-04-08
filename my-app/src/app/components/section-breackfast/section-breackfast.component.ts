import { Component, OnInit } from '@angular/core';
import { ServiceFirestoreService } from '../../services/service-firestore/service-firestore.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-section-breackfast',
  templateUrl: './section-breackfast.component.html',
  styleUrls: ['./section-breackfast.component.css']
})
export class SectionBreackfastComponent implements OnInit {

  desayunos = [] ;
  breackfast: any;

  constructor(
    private activateRouter: ActivatedRoute,
    public menusService: ServiceFirestoreService
    
  ) { }

  ngOnInit() {
    this.activateRouter.params.subscribe(params => {
      this.breackfast = params['breackfast'];
      this.menusService.getMenus().subscribe(menus => {
        this.desayunos = Object.entries(menus);
  
    })

    
    })

  }


}
