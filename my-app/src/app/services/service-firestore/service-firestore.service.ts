import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ServiceFirestoreService {

  desayunosCollection: Observable<Menus>;
  almuerzoYcena: Observable<Menus>;
  adicional: Observable<Menus>;
  acompañamiento: Observable<Menus>;
  bebidas: Observable<Menus>;



  constructor( public dataMenus: AngularFirestore) {
    this.desayunosCollection = this.dataMenus.collection('menús').doc('desayuno').valueChanges();
    this.almuerzoYcena = this.dataMenus.collection('menús').doc('almuerzo y cena').valueChanges();
    this.adicional = this.dataMenus.collection('menús').doc('adicional').valueChanges();
    this.acompañamiento = this.dataMenus.collection('menús').doc('acompañamiento').valueChanges();
    this.bebidas = this.dataMenus.collection('menús').doc('bebidas').valueChanges();
   }
   getMenus() {
     return this.desayunosCollection;
   }
   getAlmuerzoYcena() {
     return this.almuerzoYcena;
   }
  
}


export interface Menus{
  menus?: string;
}