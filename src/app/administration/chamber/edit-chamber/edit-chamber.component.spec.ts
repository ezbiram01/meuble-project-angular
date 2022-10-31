import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChamberComponent } from './edit-chamber.component';

describe('EditChamberComponent', () => {
  let component: EditChamberComponent;
  let fixture: ComponentFixture<EditChamberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditChamberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChamberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
