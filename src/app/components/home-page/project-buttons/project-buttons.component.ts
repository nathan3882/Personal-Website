import {Component, Injectable, OnInit} from '@angular/core';
import {LocationService} from '../../../services/location.service';

class PersonalProject {

  displayName: string;
  githubLink: string;
  path: string;

  constructor() {
  }

  public setDisplayName(displayName: string): PersonalProject {
    this.displayName = displayName;
    return this;
  }

  public setPath(path: string): PersonalProject {
    this.path = path;
    return this;
  }

  public setGithubLink(githubLink: string): PersonalProject {
    this.githubLink = githubLink;
    return this;
  }

}

@Component({
  selector: 'app-project-buttons',
  templateUrl: './project-buttons.component.html',
  styleUrls: ['./project-buttons.component.css']
})
@Injectable()
export class ProjectButtonsComponent implements OnInit {

  public ttrainparse: PersonalProject;
  public spotipoint: PersonalProject;

  constructor(private locationService: LocationService, private projectService: ProjectService) {
    this.ttrainparse = new PersonalProject().setPath('ttrainparse').setDisplayName('TTrainParse').setGithubLink('TTrainParse');
    this.spotipoint = new PersonalProject().setPath('spotipoint').setDisplayName('Spotipoint').setGithubLink('Spotipoint');
  }

  ngOnInit() {
  }

  handleClick(projectName: PersonalProject) {
    if (this.locationService.redirectToProject(projectName.path)) {
     this.projectService
    }
  }
}
