import { TestBed } from '@angular/core/testing';

import { ServiceFirestoreService } from './service-firestore.service';

describe('ServiceFirestoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceFirestoreService = TestBed.get(ServiceFirestoreService);
    expect(service).toBeTruthy();
  });
});
