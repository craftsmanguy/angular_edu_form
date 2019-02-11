import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTotoComponent } from './ui-toto.component';

describe('UiTotoComponent', () => {
  let component: UiTotoComponent;
  let fixture: ComponentFixture<UiTotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiTotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiTotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
