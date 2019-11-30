import {Injectable} from '@angular/core';
import {LocationService} from '../location/location.service';
import {PersonalProject} from "../../models/PersonalProject";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  public ttrainparse: PersonalProject;
  public spotipoint: PersonalProject;
  public activeProject: PersonalProject;

  constructor(public projectService: ProjectsService, private locationService: LocationService) {
    this.ttrainparse = new PersonalProject().setPath('ttrainparse').setDisplayName('TTrainParse').setGithubLink('TTrainParse');
    this.spotipoint = new PersonalProject().setPath('spotipoint').setDisplayName('Spotipoint').setGithubLink('Spotipoint');
  }

  ngOnInit() {
  }

  handleClick(project: PersonalProject): void {
    this.locationService.redirectToProject(project.path).then(result => {
      this.projectService.activeProject = project;
    });
  }
}
