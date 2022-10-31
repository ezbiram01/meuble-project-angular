import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaiseLongueComponent } from './chaise-longue.component';

describe('ChaiseLongueComponent', () => {
  let component: ChaiseLongueComponent;
  let fixture: ComponentFixture<ChaiseLongueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaiseLongueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaiseLongueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
