import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMemeber1Component } from './list-memeber1.component';

describe('ListMemeber1Component', () => {
  let component: ListMemeber1Component;
  let fixture: ComponentFixture<ListMemeber1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMemeber1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMemeber1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
