import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChaiseComponent } from './add-chaise.component';

describe('AddChaiseComponent', () => {
  let component: AddChaiseComponent;
  let fixture: ComponentFixture<AddChaiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChaiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChaiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
