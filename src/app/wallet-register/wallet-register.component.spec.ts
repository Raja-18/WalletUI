import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletRegisterComponent } from './wallet-register.component';

describe('WalletRegisterComponent', () => {
  let component: WalletRegisterComponent;
  let fixture: ComponentFixture<WalletRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalletRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
