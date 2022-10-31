import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSalloncanapeComponent } from './edit-salloncanape.component';

describe('EditSalloncanapeComponent', () => {
  let component: EditSalloncanapeComponent;
  let fixture: ComponentFixture<EditSalloncanapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSalloncanapeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSalloncanapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
