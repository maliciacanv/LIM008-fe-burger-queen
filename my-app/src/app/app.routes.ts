import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/start/start.component'
import { SectionTwoComponent } from './components/section-two/section-two.component';
import { SectionBreakfastComponent } from './components/section-breakfast/section-breakfast.component';
import { SectionLunchComponent } from './components/section-lunch/section-lunch.component';
import { OrderComponent } from './components/order/order.component'
import { OrderReadyComponent } from './components/order-ready/order-ready.component';

export const routes: Routes = [
  { path: '', redirectTo:'start', pathMatch: 'full'},
  { path: 'start', component: StartComponent },
  { path: 'order', component: OrderComponent },
  { path: 'home', component: SectionTwoComponent,
    children: [
     { path: '', redirectTo:'breakfast',pathMatch: 'full' },
     { path: 'breakfast', component: SectionBreakfastComponent},
     { path: 'lunch', component: SectionLunchComponent },
    ]
  },
  { path: 'orderReady', component: OrderReadyComponent }
]

export const APP_ROUTING = RouterModule.forRoot(routes);
