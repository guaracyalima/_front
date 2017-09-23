import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotesViewComponent } from './votes-view.component';

describe('VotesViewComponent', () => {
  let component: VotesViewComponent;
  let fixture: ComponentFixture<VotesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
