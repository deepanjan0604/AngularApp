import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeComponentComponent } from './age-component.component';

describe('AgeComponentComponent', () => {
  let component: AgeComponentComponent;
  let fixture: ComponentFixture<AgeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
