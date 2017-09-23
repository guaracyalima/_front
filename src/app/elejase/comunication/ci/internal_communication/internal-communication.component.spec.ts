import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalCommunicationComponent } from './internal-communication.component';

describe('InternalCommunicationComponent', () => {
  let component: InternalCommunicationComponent;
  let fixture: ComponentFixture<InternalCommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalCommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
