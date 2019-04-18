import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDinnerComponent } from './section-dinner.component';

describe('SectionDinnerComponent', () => {
  let component: SectionDinnerComponent;
  let fixture: ComponentFixture<SectionDinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionDinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionDinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
