import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelproduitComponent } from './modelproduit.component';

describe('ModelproduitComponent', () => {
  let component: ModelproduitComponent;
  let fixture: ComponentFixture<ModelproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelproduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
