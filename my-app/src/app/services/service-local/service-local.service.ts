import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceLocalService {
 


  constructor(

  ) { }
  inputName(name: string){
    console.log(name)

    let nameArr= [];
    // name = name.toLowerCase();
    if(name.length > 1 ) {
      nameArr.push(name);
    }
    return nameArr;
  }

}
