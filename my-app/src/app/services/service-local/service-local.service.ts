import { Injectable } from '@angular/core';
// import { SectionOneComponent } from '../../components/section-one/section-one.component';
// import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceLocalService {

  public nameClient = new BehaviorSubject('');
  names = this.nameClient.asObservable();

  public pedidosDesayunos= new BehaviorSubject({});
  desayunos = this.pedidosDesayunos.asObservable();

  public arrayBreakfast: object[] = [];

  constructor( ) {}

  getName(value: string){
    this.nameClient.next(value);
  }

  getBreakfast(obj){
    this.arrayBreakfast.push(obj)
     this.pedidosDesayunos.next(this.arrayBreakfast)
  }

}

// export interface Names{
//   names?: string ;
// }


  // getName(name){
  //   let nameArr = '';
  //   console.log(nameArr)
  //   if(name.length > 1 ) {
  //     nameArr = name;
  //   }
  //   return nameArr;
  // }
