import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPerfilApComponent } from './admin-perfil-ap.component';

describe('AdminPerfilApComponent', () => {
  let component: AdminPerfilApComponent;
  let fixture: ComponentFixture<AdminPerfilApComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPerfilApComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPerfilApComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
