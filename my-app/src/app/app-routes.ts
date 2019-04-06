import { Routes, RouterModule } from '@angular/router';
import { SectionOneComponent } from './components/section-one/section-one.component';
import { SectionTwoComponent } from './components/section-two/section-two.component';

const APP_ROUTES: Routes = [
  { path: 'section-one', component: SectionOneComponent },
  { path: 'section-two', component: SectionTwoComponent },
  { path: '', component: SectionOneComponent }

  // { path: '**', pathMatch: 'full', redirectTo: 'section-one'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
