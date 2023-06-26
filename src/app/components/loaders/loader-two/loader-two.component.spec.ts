import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderTwoComponent } from './loader-two.component';

describe('LoaderTwoComponent', () => {
  let component: LoaderTwoComponent;
  let fixture: ComponentFixture<LoaderTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoaderTwoComponent]
    });
    fixture = TestBed.createComponent(LoaderTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
