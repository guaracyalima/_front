import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotesNewComponent } from './votes-new.component';

describe('VotesNewComponent', () => {
  let component: VotesNewComponent;
  let fixture: ComponentFixture<VotesNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotesNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
