import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPackagesComponent } from './services-packages.component';

describe('ServicesPackagesComponent', () => {
  let component: ServicesPackagesComponent;
  let fixture: ComponentFixture<ServicesPackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesPackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
