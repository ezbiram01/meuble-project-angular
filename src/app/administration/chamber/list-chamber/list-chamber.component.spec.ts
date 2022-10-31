import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChamberComponent } from './list-chamber.component';

describe('ListChamberComponent', () => {
  let component: ListChamberComponent;
  let fixture: ComponentFixture<ListChamberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListChamberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListChamberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
