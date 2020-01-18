import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpsampleComponent } from './httpsample.component';

describe('HttpsampleComponent', () => {
  let component: HttpsampleComponent;
  let fixture: ComponentFixture<HttpsampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpsampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
