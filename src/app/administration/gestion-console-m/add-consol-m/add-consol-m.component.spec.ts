import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConsolMComponent } from './add-consol-m.component';

describe('AddConsolMComponent', () => {
  let component: AddConsolMComponent;
  let fixture: ComponentFixture<AddConsolMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConsolMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConsolMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
