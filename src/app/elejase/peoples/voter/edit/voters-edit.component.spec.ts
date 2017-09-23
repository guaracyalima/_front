import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotersEditComponent } from './voters-edit.component';

describe('VotersEditComponent', () => {
  let component: VotersEditComponent;
  let fixture: ComponentFixture<VotersEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
