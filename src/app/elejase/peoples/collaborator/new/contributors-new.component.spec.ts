import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorsNewComponent } from './contributors-new.component';

describe('ContributorsNewComponent', () => {
  let component: ContributorsNewComponent;
  let fixture: ComponentFixture<ContributorsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributorsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
