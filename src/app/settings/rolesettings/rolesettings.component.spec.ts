import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesettingsComponent } from './rolesettings.component';

describe('RolesettingsComponent', () => {
  let component: RolesettingsComponent;
  let fixture: ComponentFixture<RolesettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolesettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
