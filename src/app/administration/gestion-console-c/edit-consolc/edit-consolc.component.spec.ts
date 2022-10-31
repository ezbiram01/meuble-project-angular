import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConsolcComponent } from './edit-consolc.component';

describe('EditConsolcComponent', () => {
  let component: EditConsolcComponent;
  let fixture: ComponentFixture<EditConsolcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditConsolcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConsolcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
