import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressesEditComponent } from './addresses-edit.component';

describe('AddressesEditComponent', () => {
  let component: AddressesEditComponent;
  let fixture: ComponentFixture<AddressesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
