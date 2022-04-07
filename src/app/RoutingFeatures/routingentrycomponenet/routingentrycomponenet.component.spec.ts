import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingentrycomponenetComponent } from './routingentrycomponenet.component';

describe('RoutingentrycomponenetComponent', () => {
  let component: RoutingentrycomponenetComponent;
  let fixture: ComponentFixture<RoutingentrycomponenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingentrycomponenetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingentrycomponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
