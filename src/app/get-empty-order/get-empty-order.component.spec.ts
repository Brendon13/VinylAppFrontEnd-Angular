import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmptyOrderComponent } from './get-empty-order.component';

describe('GetEmptyOrderComponent', () => {
  let component: GetEmptyOrderComponent;
  let fixture: ComponentFixture<GetEmptyOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetEmptyOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEmptyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
