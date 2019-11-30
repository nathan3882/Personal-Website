import {Component, Injectable, OnInit} from '@angular/core';
import {LocationService} from '../../services/location/location.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
@Injectable()
export class ProjectComponent implements OnInit {

  project: string;

  constructor(locationService: LocationService) {
    this.project = locationService.fromProject();
  }

  ngOnInit() {
  }

}
