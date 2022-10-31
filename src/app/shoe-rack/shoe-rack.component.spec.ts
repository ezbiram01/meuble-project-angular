import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeRackComponent } from './shoe-rack.component';

describe('ShoeRackComponent', () => {
  let component: ShoeRackComponent;
  let fixture: ComponentFixture<ShoeRackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoeRackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoeRackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
