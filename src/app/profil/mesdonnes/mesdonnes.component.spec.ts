import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesdonnesComponent } from './mesdonnes.component';

describe('MesdonnesComponent', () => {
  let component: MesdonnesComponent;
  let fixture: ComponentFixture<MesdonnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesdonnesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesdonnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
