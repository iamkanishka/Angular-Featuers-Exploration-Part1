import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceuserComponent } from './serviceuser.component';

describe('ServiceuserComponent', () => {
  let component: ServiceuserComponent;
  let fixture: ComponentFixture<ServiceuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
