import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PravachanamuluComponent } from './pravachanamulu.component';

describe('PravachanamuluComponent', () => {
  let component: PravachanamuluComponent;
  let fixture: ComponentFixture<PravachanamuluComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PravachanamuluComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PravachanamuluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
