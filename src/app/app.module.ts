import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {AppInfoComponent} from './components/app-info/app-info.component';
import {DonationsComponent} from './components/home-page/donations/donations.component';
import {DidYouLikeComponent} from './components/home-page/did-you-like/did-you-like.component';
import {CookieService} from 'ngx-cookie-service';
import {ProjectButtonsComponent} from './components/home-page/project-buttons/project-buttons.component';
import {ProjectComponent} from './components/project/project.component';
import {HomeButtonComponent} from './components/home-button/home-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatMenuModule, MatTooltipModule} from '@angular/material';

import 'hammerjs';
const routes: Routes = [
  {path: 'project/:projectName', component: ProjectComponent},
  {path: '**', component: HomePageComponent}];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AppInfoComponent,
    DonationsComponent,
    DidYouLikeComponent,
    ProjectComponent,
    ProjectButtonsComponent,
    HomeButtonComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatTooltipModule,
    BrowserModule,
    RouterModule.forRoot(routes, {enableTracing: false}),
    MatCardModule,
    MatMenuModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
