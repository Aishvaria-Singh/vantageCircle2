import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HightlightNumberComponent } from './hightlight-number.component';

describe('HightlightNumberComponent', () => {
  let component: HightlightNumberComponent;
  let fixture: ComponentFixture<HightlightNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HightlightNumberComponent]
    });
    fixture = TestBed.createComponent(HightlightNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
