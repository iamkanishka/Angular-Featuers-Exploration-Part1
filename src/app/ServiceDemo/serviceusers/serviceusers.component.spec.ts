import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceusersComponent } from './serviceusers.component';

describe('ServiceusersComponent', () => {
  let component: ServiceusersComponent;
  let fixture: ComponentFixture<ServiceusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
