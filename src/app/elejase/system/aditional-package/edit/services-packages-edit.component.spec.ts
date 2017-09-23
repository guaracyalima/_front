import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPackagesEditComponent } from './services-packages-edit.component';

describe('ServicesPackagesEditComponent', () => {
  let component: ServicesPackagesEditComponent;
  let fixture: ComponentFixture<ServicesPackagesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesPackagesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesPackagesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
