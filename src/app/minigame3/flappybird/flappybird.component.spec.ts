import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlappybirdComponent } from './flappybird.component';

describe('FlappybirdComponent', () => {
  let component: FlappybirdComponent;
  let fixture: ComponentFixture<FlappybirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlappybirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlappybirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
