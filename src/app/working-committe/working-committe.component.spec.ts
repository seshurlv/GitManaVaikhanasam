import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingCommitteComponent } from './working-committe.component';

describe('WorkingCommitteComponent', () => {
  let component: WorkingCommitteComponent;
  let fixture: ComponentFixture<WorkingCommitteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingCommitteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingCommitteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
