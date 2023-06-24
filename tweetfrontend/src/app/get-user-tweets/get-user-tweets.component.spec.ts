import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserTweetsComponent } from './get-user-tweets.component';

describe('GetUserTweetsComponent', () => {
  let component: GetUserTweetsComponent;
  let fixture: ComponentFixture<GetUserTweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetUserTweetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUserTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
