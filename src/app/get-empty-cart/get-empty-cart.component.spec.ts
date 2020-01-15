import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmptyCartComponent } from './get-empty-cart.component';

describe('GetEmptyCartComponent', () => {
  let component: GetEmptyCartComponent;
  let fixture: ComponentFixture<GetEmptyCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetEmptyCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEmptyCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
