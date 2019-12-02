import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {LocationService} from "../../../services/location/location.service";

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
@Injectable()
export class DonationsComponent implements OnInit {

  constructor(private locationService: LocationService) {
  }

  ngOnInit() {
  }

  navigateToMonzoMe() {
    this.locationService.redirectToLink("https://monzo.me/nathanallanson", true);
  }

}
