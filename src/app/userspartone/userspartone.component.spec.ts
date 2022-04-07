import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserspartoneComponent } from './userspartone.component';

describe('UserspartoneComponent', () => {
  let component: UserspartoneComponent;
  let fixture: ComponentFixture<UserspartoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserspartoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserspartoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
