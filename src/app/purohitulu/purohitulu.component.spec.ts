import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurohituluComponent } from './purohitulu.component';

describe('PurohituluComponent', () => {
  let component: PurohituluComponent;
  let fixture: ComponentFixture<PurohituluComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurohituluComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurohituluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
