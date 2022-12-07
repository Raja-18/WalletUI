import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletAddFundsComponent } from './wallet-add-funds.component';

describe('WalletAddFundsComponent', () => {
  let component: WalletAddFundsComponent;
  let fixture: ComponentFixture<WalletAddFundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletAddFundsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalletAddFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
