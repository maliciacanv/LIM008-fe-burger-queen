import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore'
import { Observable } from 'Rxjs';

@Injectable({
  providedIn: 'root'
})


export class ServiceFirestoreService {

menusCollection: Observable<Menus[]>;
  
  constructor( public dataMenus: AngularFirestore) {
    // this.menusCollection = this.dataMenus.collection('menús').valueChanges();
   }
   getMenus() {
    //  return this.dataMenus.collection('menús').valueChanges();   
    return this.menusCollection = this.dataMenus.collection('menús').valueChanges();
   }
}




export interface Menus{
  tipo?: string;
  nombre?: string;
  precio?: number;
}