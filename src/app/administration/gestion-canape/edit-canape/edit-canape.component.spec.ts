import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCanapeComponent } from './edit-canape.component';

describe('EditCanapeComponent', () => {
  let component: EditCanapeComponent;
  let fixture: ComponentFixture<EditCanapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCanapeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCanapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
