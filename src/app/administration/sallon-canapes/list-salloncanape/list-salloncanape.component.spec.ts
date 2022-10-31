import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSalloncanapeComponent } from './list-salloncanape.component';

describe('ListSalloncanapeComponent', () => {
  let component: ListSalloncanapeComponent;
  let fixture: ComponentFixture<ListSalloncanapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSalloncanapeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSalloncanapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
