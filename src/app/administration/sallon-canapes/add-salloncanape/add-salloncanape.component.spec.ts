import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalloncanapeComponent } from './add-salloncanape.component';

describe('AddSalloncanapeComponent', () => {
  let component: AddSalloncanapeComponent;
  let fixture: ComponentFixture<AddSalloncanapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSalloncanapeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSalloncanapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
