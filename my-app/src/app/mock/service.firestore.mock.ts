import { Injectable } from '@angular/core';

@Injectable()
export class ServiceFirestoreMock {
  constructor() { }

  getMenus(): Array<{}> {
      return [
            {
                id:0,
                nombre: '',
                cantidad: 0,
                precio: 0,
                precioTotal: 0,
                tipo: ''
                }
             ];
    }
}