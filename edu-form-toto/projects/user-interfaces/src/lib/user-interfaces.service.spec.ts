import { TestBed } from '@angular/core/testing';

import { UserInterfacesService } from './user-interfaces.service';

describe('UserInterfacesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserInterfacesService = TestBed.get(UserInterfacesService);
    expect(service).toBeTruthy();
  });
});
