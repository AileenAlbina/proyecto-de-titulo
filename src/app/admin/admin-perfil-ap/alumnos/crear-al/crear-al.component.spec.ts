import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAlComponent } from './crear-al.component';

describe('CrearAlComponent', () => {
  let component: CrearAlComponent;
  let fixture: ComponentFixture<CrearAlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
