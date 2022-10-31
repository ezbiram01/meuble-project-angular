import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSalloncoinComponent } from './list-salloncoin.component';

describe('ListSalloncoinComponent', () => {
  let component: ListSalloncoinComponent;
  let fixture: ComponentFixture<ListSalloncoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSalloncoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSalloncoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
