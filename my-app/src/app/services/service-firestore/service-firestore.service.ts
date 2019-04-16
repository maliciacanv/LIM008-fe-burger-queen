import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore'
import { Observable } from 'Rxjs';

@Injectable({
  providedIn: 'root'
})


export class ServiceFirestoreService {

menusCollection: Observable<Menus[]>;

public createPedido;
  
  constructor( public dataMenus: AngularFirestore,
               public addData: AngularFirestore     
    ) {}

   getMenus() {
    return this.menusCollection = this.dataMenus.collection('menús').valueChanges();
   }
   
   addPedido(createPedido){
     return this.addData.collection('pedidos').add(createPedido)
   }

}



export interface Menus{
  tipo?: string;
  nombre?: string;
  precio?: number;
}

