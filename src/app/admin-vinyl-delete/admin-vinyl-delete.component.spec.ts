import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylDeleteComponent } from './admin-vinyl-delete.component';

describe('VinylDeleteComponent', () => {
  let component: VinylDeleteComponent;
  let fixture: ComponentFixture<VinylDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinylDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinylDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
