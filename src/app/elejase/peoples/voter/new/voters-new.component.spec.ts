import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotersNewComponent } from './voters-new.component';

describe('VotersNewComponent', () => {
  let component: VotersNewComponent;
  let fixture: ComponentFixture<VotersNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotersNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotersNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
