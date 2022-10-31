import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMemeber2Component } from './edit-memeber2.component';

describe('EditMemeber2Component', () => {
  let component: EditMemeber2Component;
  let fixture: ComponentFixture<EditMemeber2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMemeber2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMemeber2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
