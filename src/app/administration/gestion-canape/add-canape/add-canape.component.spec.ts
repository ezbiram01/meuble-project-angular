import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCanapeComponent } from './add-canape.component';

describe('AddCanapeComponent', () => {
  let component: AddCanapeComponent;
  let fixture: ComponentFixture<AddCanapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCanapeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCanapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
