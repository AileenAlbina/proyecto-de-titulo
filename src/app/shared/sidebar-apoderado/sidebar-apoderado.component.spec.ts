import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarApoderadoComponent } from './sidebar-apoderado.component';

describe('SidebarApoderadoComponent', () => {
  let component: SidebarApoderadoComponent;
  let fixture: ComponentFixture<SidebarApoderadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarApoderadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarApoderadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
