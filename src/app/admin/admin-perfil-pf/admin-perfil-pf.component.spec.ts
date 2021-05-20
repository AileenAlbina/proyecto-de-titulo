import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPerfilPfComponent } from './admin-perfil-pf.component';

describe('AdminPerfilPfComponent', () => {
  let component: AdminPerfilPfComponent;
  let fixture: ComponentFixture<AdminPerfilPfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPerfilPfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPerfilPfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
