import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMemeber2Component } from './list-memeber2.component';

describe('ListMemeber2Component', () => {
  let component: ListMemeber2Component;
  let fixture: ComponentFixture<ListMemeber2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMemeber2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMemeber2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
