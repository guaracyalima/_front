import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticEditComponent } from './politic-edit.component';

describe('PoliticEditComponent', () => {
  let component: PoliticEditComponent;
  let fixture: ComponentFixture<PoliticEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
