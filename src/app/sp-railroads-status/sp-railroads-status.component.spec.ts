import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpRailroadsStatusComponent } from './sp-railroads-status.component';

describe('SpRailroadsStatusComponent', () => {
  let component: SpRailroadsStatusComponent;
  let fixture: ComponentFixture<SpRailroadsStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpRailroadsStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpRailroadsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
