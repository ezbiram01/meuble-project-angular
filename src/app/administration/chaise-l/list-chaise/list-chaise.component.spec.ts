import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChaiseComponent } from './list-chaise.component';

describe('ListChaiseComponent', () => {
  let component: ListChaiseComponent;
  let fixture: ComponentFixture<ListChaiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListChaiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListChaiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
