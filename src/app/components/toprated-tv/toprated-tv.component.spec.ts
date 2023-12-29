import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopratedTvComponent } from './toprated-tv.component';

describe('TopratedTvComponent', () => {
  let component: TopratedTvComponent;
  let fixture: ComponentFixture<TopratedTvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopratedTvComponent]
    });
    fixture = TestBed.createComponent(TopratedTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
