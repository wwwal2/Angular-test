import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDynamicElementComponent } from './simple-dynamic-element.component';

describe('SimpleDynamicElementComponent', () => {
  let component: SimpleDynamicElementComponent;
  let fixture: ComponentFixture<SimpleDynamicElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleDynamicElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDynamicElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
