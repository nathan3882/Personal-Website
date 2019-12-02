import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProjectsService} from "../../services/projects/projects.service";
import {LocationService} from "../../services/location/location.service";

@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.css']
})
export class HomeButtonComponent implements OnInit {

  constructor(private projectsService: ProjectsService, private locationService: LocationService) {
  }

  ngOnInit() {
  }
}
