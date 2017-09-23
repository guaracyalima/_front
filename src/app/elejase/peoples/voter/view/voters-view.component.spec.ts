import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotersViewComponent } from './voters-view.component';

describe('VotersViewComponent', () => {
  let component: VotersViewComponent;
  let fixture: ComponentFixture<VotersViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotersViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
