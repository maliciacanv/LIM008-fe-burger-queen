import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ServiceFirestoreService } from '../service-firestore/service-firestore.service';


export interface Order {
  nombreDcliente: string,
  fecha: number,
  productos: Producto[]
  montoTotalDelOrden: number
}

export interface Producto {
  id?: number,
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

  public pedidosMenus= new BehaviorSubject([]);
  menus = this.pedidosMenus.asObservable();

  public montoTotalPedido = new BehaviorSubject(0);
  montoTotal = this.montoTotalPedido.asObservable();

  public arrayPedidos: Producto[] = [];

  public order: Order = {
    nombreDcliente: '',    
    fecha: 0,
    productos: [],
    montoTotalDelOrden: 0
  }
  constructor( public serviceFirestore: ServiceFirestoreService) {}

  getBreakfast(obj){
    this.arrayPedidos.push(obj)
     this.pedidosMenus.next(this.arrayPedidos);
     this.changeMontoTotal();
  }

  changeCantidad(obj, cantidadNueva){  
    this.arrayPedidos = this.arrayPedidos.map(ele => { 
      if(ele.nombre === obj.nombre){
       const objModif = {
          ...obj,
          cantidad: parseInt(cantidadNueva),
          precioTotal: obj.precio*parseInt(cantidadNueva)
        }
        return objModif;
      }
      return ele;
     });  
    this.pedidosMenus.next(this.arrayPedidos);
    this.changeMontoTotal();
  }


  changeMontoTotal(){
  const total = this.arrayPedidos.reduce((acumulador, objeto) => { 
     return  acumulador + objeto.precioTotal },0)
  this.montoTotalPedido.next(total);
  }


  updateProduct(nombre: any){
  this.arrayPedidos = this.arrayPedidos.filter(ele => { 
    return (ele.nombre !== nombre)
  })
  this.pedidosMenus.next(this.arrayPedidos)
  this.changeMontoTotal()
  }

  ordenesListo(date: any, montoTot: number, name: string){
    const orden = {
      ...this.order,
      nombreDcliente: name,
      fecha: date,
      productos: this.arrayPedidos,
      montoTotalDelOrden: montoTot
    }
    this.serviceFirestore.addPedido(orden)
  }
  







}

