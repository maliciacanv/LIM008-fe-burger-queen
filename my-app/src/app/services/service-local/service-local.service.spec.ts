import { TestBed } from '@angular/core/testing';
import { ServiceLocalService } from './service-local.service';
import { AngularFirestore } from '@angular/fire/firestore';

describe('ServiceLocalService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
        ServiceLocalService,
        {provide:  AngularFirestore }
    ]
  }));
  
  it('should be created', () => {
    let service: ServiceLocalService = TestBed.get(ServiceLocalService);
    expect(service).toBeTruthy();
  });
});