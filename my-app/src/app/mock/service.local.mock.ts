import { Injectable } from '@angular/core';

@Injectable()
export class ServiceLocalMock {
  constructor() { }

  getOrder(): Array<{}> {
      return [
          {
            nombreDcliente: '',
            fecha: 0,
            productos: [ 
                {
                id:0,
                nombre: '',
                cantidad: 0,
                precio: 0,
                precioTotal: 0,
                tipo: ''
                }
            ],
            montoTotalDelOrden: 0,       
          }
      ];
  }
}