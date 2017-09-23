import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentsNewComponent } from './attachments-new.component';

describe('AttachmentsNewComponent', () => {
  let component: AttachmentsNewComponent;
  let fixture: ComponentFixture<AttachmentsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachmentsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmentsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
