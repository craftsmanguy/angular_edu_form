import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationLienComponent } from './navigation-lien.component';

describe('NavigationLienComponent', () => {
  let component: NavigationLienComponent;
  let fixture: ComponentFixture<NavigationLienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationLienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationLienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
