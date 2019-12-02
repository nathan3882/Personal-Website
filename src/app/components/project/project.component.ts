import {Component, Injectable, OnInit} from '@angular/core';
import {LocationService} from '../../services/location/location.service';
import {ProjectsService} from "../../services/projects/projects.service";
import {PersonalProject} from "../../models/PersonalProject";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
@Injectable()
export class ProjectComponent implements OnInit {

  project: PersonalProject;

  constructor(private locationService: LocationService, private projectsService: ProjectsService) {
  }

  ngOnInit() {
    this.project = this.projectsService.activeProject;
    console.log("init ProjectComponent - " + this.project.displayName);

  }

  getDisplayNameStyle() {
    return {'color': 'mediumpurple', 'cursor': 'pointer'};
  }
}
