import {Component, Injectable, OnInit} from '@angular/core';
import {DidYouLikeService} from '../../../services/did-you-like/did-you-like.service';
import {CookieService} from 'ngx-cookie-service';
import {LocationService} from '../../../services/location/location.service';

import confetti from 'canvas-confetti';

@Component({
  selector: 'app-did-you-like',
  templateUrl: './did-you-like.component.html',
  styleUrls: ['./did-you-like.component.css']
})
@Injectable()
export class DidYouLikeComponent implements OnInit {


  constructor(public cookieService: CookieService, private locationService: LocationService, public didYouLikeService: DidYouLikeService) {
  }

  ngOnInit() {
  }

  shootConfetti(x: number, y: number): void {
    confetti({
      particleCount: 15,
      startVelocity: 15,
      spread: 30,
      shapes: ['square',],
      origin: {
        y: y,
        x: x
      }
    });
  }

  onClickYes() {
    this.addLike();
    this.shootConfetti(.5, .25);
  }

  onClickNo() {
    this.takeLike();
  }

  private addLike() {
    this.cookieService.set(this.getLikesCookieName(), String(this.getLikes() + 1));
  }

  private takeLike() {
    let newValue = this.getDislikes() - 1;
    if (newValue < 0) {
      return;
    }
    this.cookieService.set(this.getDislikesCookieName(), String(newValue));
  }

  private getLikesCookieName() {
    return this.didYouLikeService.getLikesCookieName(this.locationService.fromProject());
  }

  getLikes(): number {
    return Number(this.cookieService.get(this.getLikesCookieName()));
  }

  getDislikes() {
    return Number(this.cookieService.get(this.getDislikesCookieName()));
  }

  private getDislikesCookieName() {
    return this.didYouLikeService.getDislikesCookieName(this.locationService.fromProject());
  }
}
