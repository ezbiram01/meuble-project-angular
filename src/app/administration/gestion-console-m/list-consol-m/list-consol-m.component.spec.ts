import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConsolMComponent } from './list-consol-m.component';

describe('ListConsolMComponent', () => {
  let component: ListConsolMComponent;
  let fixture: ComponentFixture<ListConsolMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListConsolMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConsolMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
