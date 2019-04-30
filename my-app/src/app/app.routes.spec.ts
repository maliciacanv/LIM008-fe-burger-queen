import { Location } from '@angular/common';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Router
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { routes } from './app.routes';

// Componentes
import { AppComponent } from './app.component';
import { SectionTwoComponent } from './components/section-two/section-two.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { SectionBreakfastComponent } from './components/section-breakfast/section-breakfast.component';
import { SectionLunchComponent } from './components/section-lunch/section-lunch.component';

// Firestore
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';

import { environment } from '../environments/environment';


describe('Router: App', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        AngularFireModule.initializeApp(environment.firebase)
      ],
      declarations: [AppComponent, SectionTwoComponent, TicketComponent, SectionBreakfastComponent, SectionLunchComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [ AngularFirestore]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });
  it('navigate to "breakfast" redirects you to /breakfast', fakeAsync(() => {
    router.navigate(['breakfast']);
    tick();
    expect(location.path()).toBe('/breakfast');
  }));

});