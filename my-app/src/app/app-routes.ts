import { Routes, RouterModule } from '@angular/router';
import { SectionOneComponent } from './components/section-one/section-one.component';
import { SectionTwoComponent } from './components/section-two/section-two.component';
import { SectionBreackfastComponent } from './components/section-breackfast/section-breackfast.component';
// import { SectionLunchComponent } from './components/section-lunch/section-lunch.component';

const APP_ROUTES: Routes = [
  // { path: 'section-two', component: SectionLunchComponent },
  // { path: 'breackfast', component: SectionBreackfastComponent },
  { path: 'section-two/:name', component: SectionTwoComponent },
  { path: '', component: SectionOneComponent }

  // { path: '**', pathMatch: 'full', redirectTo: 'section-one'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
