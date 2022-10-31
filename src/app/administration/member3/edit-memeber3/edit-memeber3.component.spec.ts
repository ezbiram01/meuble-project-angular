import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMemeber3Component } from './edit-memeber3.component';

describe('EditMemeber3Component', () => {
  let component: EditMemeber3Component;
  let fixture: ComponentFixture<EditMemeber3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMemeber3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMemeber3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
