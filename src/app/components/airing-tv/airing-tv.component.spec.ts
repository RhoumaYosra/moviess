import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiringTvComponent } from './airing-tv.component';

describe('AiringTvComponent', () => {
  let component: AiringTvComponent;
  let fixture: ComponentFixture<AiringTvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiringTvComponent]
    });
    fixture = TestBed.createComponent(AiringTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
