import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorteMonteauComponent } from './porte-monteau.component';

describe('PorteMonteauComponent', () => {
  let component: PorteMonteauComponent;
  let fixture: ComponentFixture<PorteMonteauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorteMonteauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorteMonteauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
