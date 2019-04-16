import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface Order {
  nombreDcliente: string,
  fecha: number,
  productos: Producto[]
  montoTotalDelOrden: number
}

export interface Producto {
  nombre: string,
  cantidad: number,
  precio: number,
  precioTotal: number,
  tipo: string
}

@Injectable({
  providedIn: 'root'
})

export class ServiceLocalService {

  public nameClient = new BehaviorSubject('');
  names = this.nameClient.asObservable();

  public pedidosDesayunos= new BehaviorSubject([]);
  desayunos = this.pedidosDesayunos.asObservable();

  public arrayBreakfast: Producto[] = [];

  public order: Order = {
    nombreDcliente: '',    
    fecha: 0,
    productos: [],
    montoTotalDelOrden: 0
  }

  constructor( ) {}

  getName(value: string){
    this.order = {
      ...this.order,
      nombreDcliente: value
    }
    this.nameClient.next(value);
  }

  getBreakfast(obj){
    this.arrayBreakfast.push(obj)
     this.pedidosDesayunos.next(this.arrayBreakfast)
  }

  changeCantidad(obj, cantidadNueva){  
    const filterProducto = this.arrayBreakfast.filter(ele => ele.nombre!==obj.nombre)
    this.arrayBreakfast = [
      ...filterProducto, 
      {
        ...obj,
        cantidad: parseInt(cantidadNueva),
        precioTotal: obj.precio*parseInt(cantidadNueva)
      }
    ]
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
