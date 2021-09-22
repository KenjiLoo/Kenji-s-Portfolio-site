import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrexrunComponent } from './trexrun.component';

describe('TrexrunComponent', () => {
  let component: TrexrunComponent;
  let fixture: ComponentFixture<TrexrunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrexrunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrexrunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
