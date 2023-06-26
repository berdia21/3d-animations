import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicePageComponent } from './dice-page.component';

describe('DicePageComponent', () => {
  let component: DicePageComponent;
  let fixture: ComponentFixture<DicePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DicePageComponent]
    });
    fixture = TestBed.createComponent(DicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
