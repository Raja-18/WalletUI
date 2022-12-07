import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletFundTransferComponent } from './wallet-fund-transfer.component';

describe('WalletFundTransferComponent', () => {
  let component: WalletFundTransferComponent;
  let fixture: ComponentFixture<WalletFundTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletFundTransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalletFundTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
