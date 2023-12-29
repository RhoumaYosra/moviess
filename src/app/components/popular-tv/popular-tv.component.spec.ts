import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTvComponent } from './popular-tv.component';

describe('PopularTvComponent', () => {
  let component: PopularTvComponent;
  let fixture: ComponentFixture<PopularTvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularTvComponent]
    });
    fixture = TestBed.createComponent(PopularTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
