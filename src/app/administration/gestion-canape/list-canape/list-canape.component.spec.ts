import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCanapeComponent } from './list-canape.component';

describe('ListCanapeComponent', () => {
  let component: ListCanapeComponent;
  let fixture: ComponentFixture<ListCanapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCanapeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCanapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
