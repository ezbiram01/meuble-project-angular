import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalloncoinComponent } from './add-salloncoin.component';

describe('AddSalloncoinComponent', () => {
  let component: AddSalloncoinComponent;
  let fixture: ComponentFixture<AddSalloncoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSalloncoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSalloncoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
