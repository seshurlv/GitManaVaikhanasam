import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HydAshramamDonorsComponent } from './hyd-ashramam-donors.component';

describe('HydAshramamDonorsComponent', () => {
  let component: HydAshramamDonorsComponent;
  let fixture: ComponentFixture<HydAshramamDonorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HydAshramamDonorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HydAshramamDonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
