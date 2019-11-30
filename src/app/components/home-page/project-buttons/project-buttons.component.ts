import {Component, Injectable, OnInit} from '@angular/core';
import {ProjectsService} from '../../../services/projects/projects.service';

@Component({
  selector: 'app-project-buttons',
  templateUrl: './project-buttons.component.html',
  styleUrls: ['./project-buttons.component.css']
})
@Injectable()
export class ProjectButtonsComponent implements OnInit {

  constructor(private projectService: ProjectsService) {

  }

  ngOnInit() {
  }

  // @ts-ignore
  handleClick(projectName: PersonalProject) {
    this.projectService.handleClick(projectName);
  }
}
