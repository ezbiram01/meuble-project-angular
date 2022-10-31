import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sallon1Component } from './sallon1.component';

describe('Sallon1Component', () => {
  let component: Sallon1Component;
  let fixture: ComponentFixture<Sallon1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sallon1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sallon1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
