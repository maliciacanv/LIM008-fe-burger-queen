import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionOneComponent } from './section-one.component';
import { ServiceLocalService } from '../../services/service-local/service-local.service'
// import { ServiceLocalMock } from '../../mock/service.local.mock'

describe('SectionOneComponent', () => {
  let component: SectionOneComponent;
  let fixture: ComponentFixture<SectionOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionOneComponent ],
      providers: [
        { provide: ServiceLocalService}
      ]
    })
    .compileComponents();
  }));
  // it('should create the SectionOneComponent', () => {
  //   fixture = TestBed.createComponent(SectionOneComponent);
  //   component = fixture.componentInstance;   
  //   fixture.detectChanges();
  //   expect(component).toBeTruthy()
  // });
  // it('deberia contener el titulo', async(() => {
  //   fixture = TestBed.createComponent(SectionOneComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement
  //   expect(compiled.querySelector('h1').textContent).toContain('Ingresar el nombre del cliente');
  // }));
  
});
