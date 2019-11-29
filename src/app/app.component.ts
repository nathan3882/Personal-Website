import {Component, Injectable} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LocationService} from './services/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
@Injectable()
export class AppComponent {
  title = 'PersonalWebsite';

  constructor(router: Router, locationService: LocationService, route: ActivatedRoute) {
    locationService.queryParamSubscription = route.queryParams
      .subscribe(params => {
        locationService.setFromProject(params.fromProject);
      });
    locationService.router = router;
  }
}
