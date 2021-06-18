import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAdminProfFuncComponent } from './sidebar-admin-prof-func.component';

describe('SidebarAdminProfFuncComponent', () => {
  let component: SidebarAdminProfFuncComponent;
  let fixture: ComponentFixture<SidebarAdminProfFuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarAdminProfFuncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarAdminProfFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
