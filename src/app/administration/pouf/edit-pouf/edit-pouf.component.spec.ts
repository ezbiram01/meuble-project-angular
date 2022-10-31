import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPoufComponent } from './edit-pouf.component';

describe('EditPoufComponent', () => {
  let component: EditPoufComponent;
  let fixture: ComponentFixture<EditPoufComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPoufComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPoufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
