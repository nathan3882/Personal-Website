import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AppInfoComponent } from './components/app-info/app-info.component';

const routes: Routes = [{path: '', component: HomePageComponent}];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AppInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
