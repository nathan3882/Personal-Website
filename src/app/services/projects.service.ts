import {Injectable} from '@angular/core';
import {LocationService} from './location.service';


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

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  public ttrainparse: PersonalProject;
  public spotipoint: PersonalProject;

  constructor(private locationService: LocationService) {
    this.ttrainparse = new PersonalProject().setPath('ttrainparse').setDisplayName('TTrainParse').setGithubLink('TTrainParse');
    this.spotipoint = new PersonalProject().setPath('spotipoint').setDisplayName('Spotipoint').setGithubLink('Spotipoint');
  }

  ngOnInit() {
  }

  handleClick(projectName: PersonalProject): void {
    this.locationService.redirectToProject(projectName.path).then(result => {
      alert("le = " + result);
    });
  }
}
