import { Component, OnInit} from '@angular/core';
import { ServiceLocalService } from '../../services/service-local/service-local.service'


@Component({
    selector: 'app-section-one',
    templateUrl: './section-one.component.html',
    styleUrls: ['./section-one.component.css']
})

export class SectionOneComponent implements OnInit {

    title: string = 'Ingresa el nombre del cliente';
    name : string;

    constructor( public serviceLocal: ServiceLocalService) {
        this.serviceLocal.names.subscribe(names => {
            this.name = names;
        })
     }

    ngOnInit() {}

    inputName(name:string){
       const newName = name;
       this.serviceLocal.getName(newName);
    }
}
