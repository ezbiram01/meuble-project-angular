import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConsolMComponent } from './edit-consol-m.component';

describe('EditConsolMComponent', () => {
  let component: EditConsolMComponent;
  let fixture: ComponentFixture<EditConsolMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditConsolMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConsolMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
