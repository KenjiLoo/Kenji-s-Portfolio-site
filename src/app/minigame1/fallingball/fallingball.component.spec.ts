import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallingballComponent } from './fallingball.component';

describe('FallingballComponent', () => {
  let component: FallingballComponent;
  let fixture: ComponentFixture<FallingballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FallingballComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FallingballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
