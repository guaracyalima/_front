import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressesNewComponent } from './addresses-new.component';

describe('AddressesNewComponent', () => {
  let component: AddressesNewComponent;
  let fixture: ComponentFixture<AddressesNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressesNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
