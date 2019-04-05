import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import { APP_ROUTING } from './app-routes';

//componentes
import { AppComponent } from './app.component';
import { SectionOneComponent } from './components/section-one/section-one.component';
import { SectionTwoComponent } from './components/section-two/section-two.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionOneComponent,
    SectionTwoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
