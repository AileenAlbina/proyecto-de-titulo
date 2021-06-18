import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarProfesorComponent } from './sidebar-profesor.component';

describe('SidebarProfesorComponent', () => {
  let component: SidebarProfesorComponent;
  let fixture: ComponentFixture<SidebarProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarProfesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
