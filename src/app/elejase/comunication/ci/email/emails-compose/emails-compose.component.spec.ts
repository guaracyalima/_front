import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsComposeComponent } from './emails-compose.component';

describe('EmailsComposeComponent', () => {
  let component: EmailsComposeComponent;
  let fixture: ComponentFixture<EmailsComposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailsComposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailsComposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
