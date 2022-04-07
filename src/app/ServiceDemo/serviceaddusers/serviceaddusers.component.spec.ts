import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceaddusersComponent } from './serviceaddusers.component';

describe('ServiceaddusersComponent', () => {
  let component: ServiceaddusersComponent;
  let fixture: ComponentFixture<ServiceaddusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceaddusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceaddusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
