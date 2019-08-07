import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HydAshramamComponent } from './hyd-ashramam.component';

describe('HydAshramamComponent', () => {
  let component: HydAshramamComponent;
  let fixture: ComponentFixture<HydAshramamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HydAshramamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HydAshramamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
