import { Routes, RouterModule } from '@angular/router';
import { SectionOneComponent } from './components/section-one/section-one.component';
import { SectionTwoComponent } from './components/section-two/section-two.component';
import { SectionBreakfastComponent } from './components/section-breakfast/section-breakfast.component';
import { SectionLunchComponent } from './components/section-lunch/section-lunch.component';

export const routes: Routes = [
  { path: '', redirectTo:'inicio', pathMatch: 'full'},
  { path: 'inicio', component: SectionOneComponent },
  { path: 'home', component: SectionTwoComponent,
    children: [
     { path: '', redirectTo:'breakfast' },
     { path: 'breakfast', component: SectionBreakfastComponent},
     { path: 'lunch', component: SectionLunchComponent },
    ]
  }
]

export const APP_ROUTING = RouterModule.forRoot(routes);
