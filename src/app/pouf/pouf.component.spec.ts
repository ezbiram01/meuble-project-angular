import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoufComponent } from './pouf.component';

describe('PoufComponent', () => {
  let component: PoufComponent;
  let fixture: ComponentFixture<PoufComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoufComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
