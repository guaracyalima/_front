import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsViewComponent } from './campaigns-view.component';

describe('CampaignsViewComponent', () => {
  let component: CampaignsViewComponent;
  let fixture: ComponentFixture<CampaignsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
