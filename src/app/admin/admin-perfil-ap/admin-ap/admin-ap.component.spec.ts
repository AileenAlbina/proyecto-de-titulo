import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApComponent } from './admin-ap.component';

describe('AdminApComponent', () => {
  let component: AdminApComponent;
  let fixture: ComponentFixture<AdminApComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminApComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminApComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
