import { Component, OnInit } from '@angular/core';
import { ServiceFirestoreService } from '../../services/service-firestore/service-firestore.service';

@Component({
  selector: 'app-section-lunch',
  templateUrl: './section-lunch.component.html',
  styleUrls: ['./section-lunch.component.css']
})
export class SectionLunchComponent implements OnInit {
   
  almuerzos = [];

  constructor( public almuerzoService: ServiceFirestoreService) { }

  ngOnInit() {
    this.almuerzoService.getAlmuerzoYcena().subscribe(almuerzo => {
      this.almuerzos = Object.entries(almuerzo)
    })
  }

}
