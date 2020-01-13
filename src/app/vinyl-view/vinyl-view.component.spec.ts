import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylViewComponent } from './vinyl-view.component';

describe('VinylViewComponent', () => {
  let component: VinylViewComponent;
  let fixture: ComponentFixture<VinylViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinylViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinylViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
