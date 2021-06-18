import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearApComponent } from './crear-ap.component';

describe('CrearApComponent', () => {
  let component: CrearApComponent;
  let fixture: ComponentFixture<CrearApComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearApComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearApComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
