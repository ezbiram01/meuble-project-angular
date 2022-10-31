import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFautteilComponent } from './list-fautteil.component';

describe('ListFautteilComponent', () => {
  let component: ListFautteilComponent;
  let fixture: ComponentFixture<ListFautteilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFautteilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFautteilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
