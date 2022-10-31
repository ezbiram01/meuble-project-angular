import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FautteilleComponent } from './fautteille.component';

describe('FautteilleComponent', () => {
  let component: FautteilleComponent;
  let fixture: ComponentFixture<FautteilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FautteilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FautteilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
