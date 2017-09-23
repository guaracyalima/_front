import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesNewComponent } from './companies-new.component';

describe('CompaniesNewComponent', () => {
  let component: CompaniesNewComponent;
  let fixture: ComponentFixture<CompaniesNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
