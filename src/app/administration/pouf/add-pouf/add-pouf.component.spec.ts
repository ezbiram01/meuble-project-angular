import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPoufComponent } from './add-pouf.component';

describe('AddPoufComponent', () => {
  let component: AddPoufComponent;
  let fixture: ComponentFixture<AddPoufComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPoufComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPoufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
