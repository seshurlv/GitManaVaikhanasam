import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsettingsComponent } from './locationsettings.component';

describe('LocationsettingsComponent', () => {
  let component: LocationsettingsComponent;
  let fixture: ComponentFixture<LocationsettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationsettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
