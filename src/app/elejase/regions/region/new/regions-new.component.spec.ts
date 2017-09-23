import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsNewComponent } from './regions-new.component';

describe('RegionsNewComponent', () => {
  let component: RegionsNewComponent;
  let fixture: ComponentFixture<RegionsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
