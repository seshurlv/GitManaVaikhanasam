import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeertanaluComponent } from './keertanalu.component';

describe('KeertanaluComponent', () => {
  let component: KeertanaluComponent;
  let fixture: ComponentFixture<KeertanaluComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeertanaluComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeertanaluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
