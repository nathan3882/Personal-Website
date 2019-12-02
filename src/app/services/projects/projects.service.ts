import {Injectable} from '@angular/core';
import {LocationService} from '../location/location.service';
import {PersonalProject} from "../../models/PersonalProject";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  public ttrainparse: PersonalProject;
  public spotipoint: PersonalProject;
  public activeProject: PersonalProject;
  private navigationSubscription: Subscription;

  constructor(private activatedRoute: Router, private router: Router, private locationService: LocationService) {
    console.log("init ProjectsService - ");

    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseProjects();
      }
    });
  }
  private initialiseProjects() {
    console.log("init all my projects - ");

    this.ttrainparse = new PersonalProject().setPath('ttrainparse').setDisplayName('TTrainParse').setGithubLink('https://github.com/nathan3882/TTrainParse');
    this.spotipoint = new PersonalProject().setPath('spotipoint').setDisplayName('Spotipoint').setGithubLink('https://github.com/nathan3882/Spotipoint')
        .setTagline("Spotipoint  allows a unique listening experience for spotify and apple music listeners... read more below");
    let urlSegment = this.router;
    console.log(urlSegment);
  }

  ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves. If we
    // don't then we will continue to run our initialiseInvites()
    // method on every navigationEnd event.
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  handleClick(project: PersonalProject): void {
    this.activeProject = project;
    this.locationService.redirectToProject(project.path);
  }

  hasActiveProject(): boolean {
    return this.activeProject !== undefined;
  }
}
