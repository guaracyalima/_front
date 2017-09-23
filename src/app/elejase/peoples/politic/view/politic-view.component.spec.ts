import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticViewComponent } from './politic-view.component';

describe('PoliticViewComponent', () => {
  let component: PoliticViewComponent;
  let fixture: ComponentFixture<PoliticViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
