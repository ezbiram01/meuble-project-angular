import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConsolcComponent } from './add-consolc.component';

describe('AddConsolcComponent', () => {
  let component: AddConsolcComponent;
  let fixture: ComponentFixture<AddConsolcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConsolcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConsolcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
