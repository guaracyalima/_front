import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticNewComponent } from './politic-new.component';

describe('PoliticNewComponent', () => {
  let component: PoliticNewComponent;
  let fixture: ComponentFixture<PoliticNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
