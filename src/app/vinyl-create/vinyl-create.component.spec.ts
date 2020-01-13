import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylCreateComponent } from './vinyl-create.component';

describe('VinylCreateComponent', () => {
  let component: VinylCreateComponent;
  let fixture: ComponentFixture<VinylCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinylCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinylCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
