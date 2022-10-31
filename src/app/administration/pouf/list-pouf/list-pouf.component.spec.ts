import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPoufComponent } from './list-pouf.component';

describe('ListPoufComponent', () => {
  let component: ListPoufComponent;
  let fixture: ComponentFixture<ListPoufComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPoufComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPoufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
