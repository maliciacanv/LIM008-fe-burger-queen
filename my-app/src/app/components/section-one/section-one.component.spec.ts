import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { DebugElement } from '@angular/core'
import { SectionOneComponent } from './section-one.component';

describe('SectionOneComponent', () => {
  let component: SectionOneComponent;
  let fixture: ComponentFixture<SectionOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionOneComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });
  // it('should create', () => {
  //   expect(component.title).toBe('Ingresa el nombre del cliente');
  // });
});
