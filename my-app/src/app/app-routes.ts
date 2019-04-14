import { Routes, RouterModule } from '@angular/router';
import { SectionOneComponent } from './components/section-one/section-one.component';
import { SectionTwoComponent } from './components/section-two/section-two.component';
import { SectionBreackfastComponent } from './components/section-breackfast/section-breackfast.component';
import { SectionLunchComponent } from './components/section-lunch/section-lunch.component';

const APP_ROUTES: Routes = [
  { path: '', component: SectionOneComponent },
  { path: 'home', component: SectionTwoComponent,
    children: [
     { path: '', component: SectionBreackfastComponent },
     { path: 'breakfast', component: SectionBreackfastComponent},
     { path: 'lunch', component: SectionLunchComponent },
    ]
  }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
