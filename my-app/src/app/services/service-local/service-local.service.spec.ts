import { TestBed } from '@angular/core/testing';
import { ServiceLocalService } from './service-local.service';

describe('ServiceLocalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceLocalService = TestBed.get(ServiceLocalService);
    expect(service).toBeTruthy();
  });
});
