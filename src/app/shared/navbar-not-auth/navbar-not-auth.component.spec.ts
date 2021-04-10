import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarNotAuthComponent } from './navbar-not-auth.component';

describe('NavbarNotAuthComponent', () => {
  let component: NavbarNotAuthComponent;
  let fixture: ComponentFixture<NavbarNotAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarNotAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarNotAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
