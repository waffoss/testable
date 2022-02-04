import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoPanelComponent } from './crypto-panel.component';

describe('CryptoPanelComponent', () => {
  let component: CryptoPanelComponent;
  let fixture: ComponentFixture<CryptoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
