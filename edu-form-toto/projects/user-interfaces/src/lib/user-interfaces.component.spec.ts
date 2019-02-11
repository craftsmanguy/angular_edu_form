import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInterfacesComponent } from './user-interfaces.component';

describe('UserInterfacesComponent', () => {
  let component: UserInterfacesComponent;
  let fixture: ComponentFixture<UserInterfacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInterfacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInterfacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
