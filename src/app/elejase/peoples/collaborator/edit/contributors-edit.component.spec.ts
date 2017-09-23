import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorsEditComponent } from './contributors-edit.component';

describe('ContributorsEditComponent', () => {
  let component: ContributorsEditComponent;
  let fixture: ComponentFixture<ContributorsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributorsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
