import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InInputComponent } from './in-input.component';

describe('InInputComponent', () => {
  let component: InInputComponent;
  let fixture: ComponentFixture<InInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
