import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleModerneComponent } from './console-moderne.component';

describe('ConsoleModerneComponent', () => {
  let component: ConsoleModerneComponent;
  let fixture: ComponentFixture<ConsoleModerneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsoleModerneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleModerneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
