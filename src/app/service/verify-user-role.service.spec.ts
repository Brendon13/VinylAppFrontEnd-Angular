import { TestBed } from '@angular/core/testing';

import { VerifyUserRoleService } from './verify-user-role.service';

describe('VerifyUserRoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerifyUserRoleService = TestBed.get(VerifyUserRoleService);
    expect(service).toBeTruthy();
  });
});
