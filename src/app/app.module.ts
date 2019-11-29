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

const routes: Routes = [{path: '', component: HomePageComponent},
  {path: 'project/:projectName', component: ProjectComponent}];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AppInfoComponent,
    DonationsComponent,
    DidYouLikeComponent,
    ProjectComponent,
    ProjectButtonsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {enableTracing: false})
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
