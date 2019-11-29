import {Component, OnInit} from '@angular/core';
import {LocationService} from '../../services/location.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public locationService: LocationService) {
  }

  ngOnInit() {

  }

  getWelcomeText(): string {
    if (!this.didComeFromSomewhereElse()) {
      return '👽 Welcome home 👽';
    } else {
      return '😊 Welcome back 😊';
    }
  }

  private didComeFromSomewhereElse() {
    return this.locationService.fromProject() !== '';
  }

  getHopedYouLiked(): string {
    return 'Did you like ' + this.locationService.fromProject() + '?';
  }

  getHomeHopedYouLike() {
    return 'Like the site - Leave a like...';
  }
}
