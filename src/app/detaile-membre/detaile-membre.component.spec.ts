import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaileMembreComponent } from './detaile-membre.component';

describe('DetaileMembreComponent', () => {
  let component: DetaileMembreComponent;
  let fixture: ComponentFixture<DetaileMembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaileMembreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaileMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
