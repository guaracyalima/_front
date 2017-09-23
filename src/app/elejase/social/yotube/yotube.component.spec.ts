import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YotubeComponent } from './yotube.component';

describe('YotubeComponent', () => {
  let component: YotubeComponent;
  let fixture: ComponentFixture<YotubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YotubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YotubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
