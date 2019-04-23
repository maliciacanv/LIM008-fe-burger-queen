import { TestBed, async } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
// import { Routes, RouterModule } from '@angular/router';
// import { APP_BASE_HREF } from '@angular/common'
import { APP_ROUTING } from './app-routes'

import { ServiceFirestoreService } from './services/service-firestore/service-firestore.service'
import { ServiceLocalService } from './services/service-local/service-local.service'


import { SectionOneComponent } from './components/section-one/section-one.component';
import { SectionTwoComponent } from './components/section-two/section-two.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { SectionBreackfastComponent } from './components/section-breackfast/section-breackfast.component'
import { SectionLunchComponent } from './components/section-lunch/section-lunch.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

describe('AppComponent', () => {

  // const APP_ROUTING: Routes = [
  //   { path: '', component: SectionOneComponent },
  //   { path: 'home', component: SectionTwoComponent}
  // ]
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        // RouterModule.forRoot(APP_ROUTING) 
        APP_ROUTING
      ],
      declarations: [
        AppComponent,
        SectionOneComponent,
        SectionTwoComponent,
        SectionBreackfastComponent,
        SectionLunchComponent,
        TicketComponent
      ],
      providers: [
        ServiceFirestoreService,
        ServiceLocalService,
        // { provide: APP_BASE_HREF, useValue: '/'}
      ],
    
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    }).compileComponents();  
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'my-app'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('my-app');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to my-app!');
  // });
});


