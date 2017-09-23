import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansNewComponent } from './plans-new.component';

describe('PlansNewComponent', () => {
  let component: PlansNewComponent;
  let fixture: ComponentFixture<PlansNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlansNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
