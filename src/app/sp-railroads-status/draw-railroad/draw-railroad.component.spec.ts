import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawRailroadComponent } from './draw-railroad.component';

describe('DrawRailroadComponent', () => {
  let component: DrawRailroadComponent;
  let fixture: ComponentFixture<DrawRailroadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawRailroadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawRailroadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
