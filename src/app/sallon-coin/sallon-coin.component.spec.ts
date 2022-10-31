import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SallonCoinComponent } from './sallon-coin.component';

describe('SallonCoinComponent', () => {
  let component: SallonCoinComponent;
  let fixture: ComponentFixture<SallonCoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SallonCoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SallonCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
