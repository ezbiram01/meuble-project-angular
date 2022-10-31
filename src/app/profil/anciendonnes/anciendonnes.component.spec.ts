import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnciendonnesComponent } from './anciendonnes.component';

describe('AnciendonnesComponent', () => {
  let component: AnciendonnesComponent;
  let fixture: ComponentFixture<AnciendonnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnciendonnesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnciendonnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
