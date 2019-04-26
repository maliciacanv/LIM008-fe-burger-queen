import { TestBed } from '@angular/core/testing';
import { ServiceFirestoreService } from './service-firestore.service';
import { AngularFirestore } from '@angular/fire/firestore';

describe('ServiceFirestoreService', () => {
  beforeEach(() => { 
  TestBed.configureTestingModule({
      providers: [
          ServiceFirestoreService,
          {provide:  AngularFirestore }
      ]
  })
});

  it('should be created', () => {
    let service: ServiceFirestoreService = TestBed.get(ServiceFirestoreService);
    expect(service).toBeTruthy();
  });
});
