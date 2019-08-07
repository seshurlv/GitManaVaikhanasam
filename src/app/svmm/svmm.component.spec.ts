import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvmmComponent } from './svmm.component';

describe('SvmmComponent', () => {
  let component: SvmmComponent;
  let fixture: ComponentFixture<SvmmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvmmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvmmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
