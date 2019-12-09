import {Injectable} from '@angular/core';
import {LocationService} from '../location/location.service';
import {PersonalProject} from '../../models/PersonalProject';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private navigationSubscription: Subscription;

  public ttrainparse: PersonalProject;
  public spotipoint: PersonalProject;
  public NBIdealTrains: PersonalProject;
  public activeProject: PersonalProject;
  public androidTtrainParse: PersonalProject;
  public howFast: PersonalProject;
  public bigBookRevision: PersonalProject;
  public freelance: PersonalProject;

  public allProjects: PersonalProject[] = [];

  constructor(private router: Router, private locationService: LocationService) {
    // If it is a NavigationEnd event re-initalise the component

    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initialiseProjects();
      }
    });
  }

  private initialiseProjects() {
    console.log('init all my projects - ');

    this.freelance = new PersonalProject()
      .setButtonName('Freelance')
      .setDisplayName('My freelance explanation')
      .setGithubLink('https://github.com/nathan3882/TTrainParse')
      .setPath('freelance')
      .setTagline('This is a small explanation as to why there is no freelance projects visible on my site or my GitHub page.');


    this.ttrainparse = new PersonalProject()
      .setButtonName('TTrainParse')
      .setDisplayName('TTrainParse\'s thick Desktop client')
      .setGithubLink('https://github.com/nathan3882/TTrainParse')
      .setPath('ttrainparse')
      .setTagline('TTrainParse allows a Brockenhurst College student to upload a screenshot of their .png/.jpg timetable to recieve a list of trains that will get them to their lesson on time.');

    this.spotipoint = new PersonalProject()
      .setButtonName('Spotipoint')
      .setDisplayName('Spotipoint for Desktop')
      .setPath('spotipoint')
      .setGithubLink('https://github.com/nathan3882/Spotipoint')
      .setTagline('Spotipoint allows a unique listening experience for spotify and apple music listeners... read more below');

    this.NBIdealTrains = new PersonalProject()
      .setButtonName('SWR IdealTrains Library')
      .setDisplayName('SWR IdealTrains Library')
      .setPath('nbidealtrains')
      .setGithubLink('https://github.com/nathan3882/NBIdealTrains')
      .setTagline('This is a SOAP Web Service consumer that, of course, consumes South Western Railway\'s Darwin Live Data Feeds. The same datafeeds they write their arrival / departure boards using.');

    this.androidTtrainParse = new PersonalProject()
      .setButtonName('Android TTrainParse')
      .setDisplayName('TTrainParse for Android')
      .setPath('androidttrainparse')
      .setGithubLink('https://github.com/nathan3882/AndroidTTParse')
      .setTagline('This is an thin android application written that displays information done by the thick computation in TTrainParse\'s desktop client.');

    this.bigBookRevision = new PersonalProject()
      .setButtonName('Big Book Revision')
      .setDisplayName('Big Book Revision for Desktop')
      .setPath('bigbookrevision')
      .setGithubLink('https://github.com/nathan3882/BigBookRevision')
      .setTagline('This program makes creation and maintenance of mass amounts of student note files easy');

    this.howFast = new PersonalProject()
      .setButtonName('Android HowFast')
      .setDisplayName('HowFast for Android')
      .setPath('howfast')
      .setGithubLink('https://github.com/nathan3882/howfast')
      .setTagline('This is a program that allows you to constantly view how fast you\'re going along with sending off conditional notifications to your phone when you reach certan speeds.');

    this.allProjects.push(this.howFast, this.bigBookRevision, this.androidTtrainParse, this.NBIdealTrains, this.spotipoint, this.ttrainparse, this.freelance);

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

  getByRouterName(currentProjectName: string): PersonalProject | undefined {
    let found: PersonalProject | undefined = undefined;
    for (let i = 0; i < this.allProjects.length; i++) {
      if (currentProjectName === this.allProjects[i].path) {
        return this.allProjects[i];
      }
    }
    return found;
  }

  syncWithRouter(activatedRoute: ActivatedRoute): void {
    let currentProjectName = activatedRoute.snapshot.params.projectName;
    this.activeProject = this.getByRouterName(currentProjectName);
  }
}
