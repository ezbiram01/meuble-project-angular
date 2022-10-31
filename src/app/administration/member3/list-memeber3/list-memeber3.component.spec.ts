import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMemeber3Component } from './list-memeber3.component';

describe('ListMemeber3Component', () => {
  let component: ListMemeber3Component;
  let fixture: ComponentFixture<ListMemeber3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMemeber3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMemeber3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
