import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPackagesNewComponent } from './services-packages-new.component';

describe('ServicesPackagesNewComponent', () => {
  let component: ServicesPackagesNewComponent;
  let fixture: ComponentFixture<ServicesPackagesNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesPackagesNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesPackagesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
