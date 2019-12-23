import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetVinylsComponent } from './get-vinyls.component';

describe('GetVinylsComponent', () => {
  let component: GetVinylsComponent;
  let fixture: ComponentFixture<GetVinylsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetVinylsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetVinylsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
