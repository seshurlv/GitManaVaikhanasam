import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StotramuluComponent } from './stotramulu.component';

describe('StotramuluComponent', () => {
  let component: StotramuluComponent;
  let fixture: ComponentFixture<StotramuluComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StotramuluComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StotramuluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
