import {Component, Injectable, Input, OnInit} from '@angular/core';
import {PersonalProject} from '../../../../models/PersonalProject';
import {ProjectsService} from '../../../../services/projects/projects.service';

@Component({
  selector: 'app-project-button',
  templateUrl: './project-button.component.html',
  styleUrls: ['./project-button.component.css']
})
@Injectable()
export class ProjectButtonComponent implements OnInit {

  @Input() project: PersonalProject;

  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
  }

  // @ts-ignore
  handleClick(projectName: PersonalProject) {
    this.projectService.handleClick(projectName);
  }
}
