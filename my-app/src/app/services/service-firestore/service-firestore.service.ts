import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ServiceFirestoreService {

menusCollection: Observable<Menus[]>;

pedidosMenus: {};

public createPedido;
  
  constructor( public dataMenus: AngularFirestore,
               public addData: AngularFirestore     
    ) {}

   getMenus() {
    return this.menusCollection = this.dataMenus.collection('menús').valueChanges();
   }

   addPedido(createPedido){
     this.addData.collection('ordenes').add(createPedido);
   }

   getPedidos(){
    return this.dataMenus.collection('ordenes').valueChanges()
   }

}
export interface Menus{
  tipo?: string,
  nombre?: string,
  precio?: number,
}

