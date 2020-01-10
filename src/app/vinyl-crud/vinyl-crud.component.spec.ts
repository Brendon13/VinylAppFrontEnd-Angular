import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylCrudComponent } from './vinyl-crud.component';

describe('VinylCrudComponent', () => {
  let component: VinylCrudComponent;
  let fixture: ComponentFixture<VinylCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinylCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinylCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
