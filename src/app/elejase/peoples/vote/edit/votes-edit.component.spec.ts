import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotesEditComponent } from './votes-edit.component';

describe('VotesEditComponent', () => {
  let component: VotesEditComponent;
  let fixture: ComponentFixture<VotesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
