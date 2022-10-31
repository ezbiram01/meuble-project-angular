import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdonnesComponent } from './newdonnes.component';

describe('NewdonnesComponent', () => {
  let component: NewdonnesComponent;
  let fixture: ComponentFixture<NewdonnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewdonnesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdonnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
