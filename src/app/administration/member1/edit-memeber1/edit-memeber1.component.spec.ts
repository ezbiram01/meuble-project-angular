import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMemeber1Component } from './edit-memeber1.component';

describe('EditMemeber1Component', () => {
  let component: EditMemeber1Component;
  let fixture: ComponentFixture<EditMemeber1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMemeber1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMemeber1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
