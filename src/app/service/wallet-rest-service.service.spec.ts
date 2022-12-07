import { TestBed } from '@angular/core/testing';

import { WalletRestServiceService } from './wallet-rest-service.service';

describe('WalletRestServiceService', () => {
  let service: WalletRestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalletRestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
