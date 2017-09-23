import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsOldComponent } from './emails-old.component';

describe('EmailsOldComponent', () => {
  let component: EmailsOldComponent;
  let fixture: ComponentFixture<EmailsOldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailsOldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailsOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
