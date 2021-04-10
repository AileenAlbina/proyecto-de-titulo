import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFichaAlumnoComponent } from './crear-ficha-alumno.component';

describe('CrearFichaAlumnoComponent', () => {
  let component: CrearFichaAlumnoComponent;
  let fixture: ComponentFixture<CrearFichaAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearFichaAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFichaAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
