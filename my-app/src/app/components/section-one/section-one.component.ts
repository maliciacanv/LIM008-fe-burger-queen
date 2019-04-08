import { Component } from '@angular/core'
import { Router } from '@angular/router';
// import { SectionTwoComponent } from '../section-two/section-two.component';


@Component({
    selector: 'app-section-one',
    templateUrl: './section-one.component.html',
    styleUrls: ['./section-one.component.css']
})

export class SectionOneComponent {

    constructor( private router: Router) { }

    title: string = 'Ingresa el nombre del cliente';
    
    
    inputName(name: string){
        console.log(name)
        let nameArr= [];
         nameArr.push(name);

        // name = name.toLowerCase();
        // if(name.length > 1 ) {
        //   nameArr.push(name);
        // }
        // return nameArr;
        this.router.navigate( ['section-two',name])
      }
    
    
    
}
