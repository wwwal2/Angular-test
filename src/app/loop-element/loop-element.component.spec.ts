import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopElementComponent } from './loop-element.component';

describe('LoopElementComponent', () => {
  let component: LoopElementComponent;
  let fixture: ComponentFixture<LoopElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoopElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
