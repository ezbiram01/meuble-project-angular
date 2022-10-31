import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFautteilComponent } from './add-fautteil.component';

describe('AddFautteilComponent', () => {
  let component: AddFautteilComponent;
  let fixture: ComponentFixture<AddFautteilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFautteilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFautteilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
