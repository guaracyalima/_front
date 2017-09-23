import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HubMarketingComponent } from './hub-marketing.component';

describe('HubMarketingComponent', () => {
  let component: HubMarketingComponent;
  let fixture: ComponentFixture<HubMarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HubMarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HubMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
