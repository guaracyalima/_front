import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressesViewComponent } from './addresses-view.component';

describe('AddressesViewComponent', () => {
  let component: AddressesViewComponent;
  let fixture: ComponentFixture<AddressesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
