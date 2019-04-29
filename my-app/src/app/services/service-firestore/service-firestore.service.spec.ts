import { TestBed } from '@angular/core/testing';
import { ServiceFirestoreService } from './service-firestore.service';
import { AngularFirestore } from '@angular/fire/firestore';


const menuObject: object[] = [
  {
    nambreDCliente: '',
    fecha: 0,
    productos: [],
    montoTotalDelOrden: 0,
  }
];

const collectionMenus = {
  valueChanges: jasmine.createSpy('valueChanges').and.returnValue(menuObject)
}

const angularFirestoreMenus = {
  collection: jasmine.createSpy('collection').and.returnValue(collectionMenus)
}

describe('ServiceFirestoreService', () => {

  let service: ServiceFirestoreService;
  let angularFirestore: AngularFirestore;

  beforeEach(() => { 
  TestBed.configureTestingModule({
      providers: [
          ServiceFirestoreService,
          {provide:  AngularFirestore,
          useValue: angularFirestoreMenus }
      ]
  });

  service = TestBed.get(ServiceFirestoreService);
  angularFirestore = TestBed.get(AngularFirestore);

});

  it('should be created', () => {
    // let service: ServiceFirestoreService = TestBed.get(ServiceFirestoreService);
    expect(service).toBeTruthy();
  });
});
