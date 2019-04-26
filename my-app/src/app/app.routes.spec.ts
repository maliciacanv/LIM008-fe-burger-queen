import { TestBed, fakeAsync, ComponentFixture, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { APP_ROUTES} from './app-routes'

import {Location} from "@angular/common";
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";

import { SectionOneComponent } from './components/section-one/section-one.component';
import { SectionTwoComponent } from './components/section-two/section-two.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { SectionBreackfastComponent } from './components/section-breackfast/section-breackfast.component'
import { SectionLunchComponent } from './components/section-lunch/section-lunch.component'


describe('AppComponent', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(APP_ROUTES)],
      declarations: [
        AppComponent,
        SectionOneComponent,  
        SectionTwoComponent,
        SectionBreackfastComponent,
        SectionLunchComponent,
        TicketComponent
      ],
    }).compileComponents();

    router = TestBed.get(Router); 
    location = TestBed.get(Location); 

    fixture = TestBed.createComponent(AppComponent);  
    router.initialNavigation();

  });
  it('navigate to "" redirects you to /inicio', fakeAsync(() => { 
    router.navigate([''])
    .then( () => { 
        tick();
        expect(location.path()).toBe('/inicio');     
    })
  }));
  it('navigate to "" redirects you to /home', () => { 
    router.navigate(['home']); 
    expect(location.path()).toBe('/home'); 
  });

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });


});
