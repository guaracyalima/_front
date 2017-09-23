import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsTodayComponent } from './emails-today.component';

describe('EmailsTodayComponent', () => {
  let component: EmailsTodayComponent;
  let fixture: ComponentFixture<EmailsTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailsTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailsTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
