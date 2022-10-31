import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleTradionalComponent } from './console-tradional.component';

describe('ConsoleTradionalComponent', () => {
  let component: ConsoleTradionalComponent;
  let fixture: ComponentFixture<ConsoleTradionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsoleTradionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleTradionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
