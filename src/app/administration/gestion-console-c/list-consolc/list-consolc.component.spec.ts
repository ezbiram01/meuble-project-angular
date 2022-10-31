import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConsolcComponent } from './list-consolc.component';

describe('ListConsolcComponent', () => {
  let component: ListConsolcComponent;
  let fixture: ComponentFixture<ListConsolcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListConsolcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConsolcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
