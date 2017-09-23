import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsNewComponent } from './campaigns-new.component';

describe('CampaignsNewComponent', () => {
  let component: CampaignsNewComponent;
  let fixture: ComponentFixture<CampaignsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
