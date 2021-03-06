import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCartComponent } from './customer-get-cart.component';

describe('GetCartComponent', () => {
  let component: GetCartComponent;
  let fixture: ComponentFixture<GetCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
