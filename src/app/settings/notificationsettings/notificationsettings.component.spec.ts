import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsettingsComponent } from './notificationsettings.component';

describe('NotificationsettingsComponent', () => {
  let component: NotificationsettingsComponent;
  let fixture: ComponentFixture<NotificationsettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
