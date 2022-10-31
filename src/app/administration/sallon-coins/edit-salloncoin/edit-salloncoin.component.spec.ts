import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSalloncoinComponent } from './edit-salloncoin.component';

describe('EditSalloncoinComponent', () => {
  let component: EditSalloncoinComponent;
  let fixture: ComponentFixture<EditSalloncoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSalloncoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSalloncoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
