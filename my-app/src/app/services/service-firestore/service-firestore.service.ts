import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceFirestoreService {

  constructor( public dataMenus: AngularFirestore) { }
}
