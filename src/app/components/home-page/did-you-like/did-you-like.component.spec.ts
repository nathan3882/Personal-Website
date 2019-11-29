import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DidYouLikeComponent} from './did-you-like.component';

describe('DidYouLikeComponent', () => {
  let component: DidYouLikeComponent;
  let fixture: ComponentFixture<DidYouLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DidYouLikeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DidYouLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
