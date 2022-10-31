import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChaiseComponent } from './edit-chaise.component';

describe('EditChaiseComponent', () => {
  let component: EditChaiseComponent;
  let fixture: ComponentFixture<EditChaiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditChaiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChaiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
