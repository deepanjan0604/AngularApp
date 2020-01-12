import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputeditorComponent } from './inputeditor.component';

describe('InputeditorComponent', () => {
  let component: InputeditorComponent;
  let fixture: ComponentFixture<InputeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
