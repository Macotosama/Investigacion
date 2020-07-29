import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialogdelete2Component } from './dialogdelete2.component';

describe('Dialogdelete2Component', () => {
  let component: Dialogdelete2Component;
  let fixture: ComponentFixture<Dialogdelete2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialogdelete2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialogdelete2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
