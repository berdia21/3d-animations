import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VantaComponent } from './vanta.component';

describe('VantaComponent', () => {
  let component: VantaComponent;
  let fixture: ComponentFixture<VantaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [VantaComponent]
    });
    fixture = TestBed.createComponent(VantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
