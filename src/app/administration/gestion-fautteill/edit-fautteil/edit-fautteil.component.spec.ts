import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFautteilComponent } from './edit-fautteil.component';

describe('EditFautteilComponent', () => {
  let component: EditFautteilComponent;
  let fixture: ComponentFixture<EditFautteilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFautteilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFautteilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
