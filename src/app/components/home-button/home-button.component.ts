import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProjectsService} from "../../services/projects/projects.service";

@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.css']
})
export class HomeButtonComponent implements OnInit {

  constructor(private router: Router, private projectService: ProjectsService) {
  }

  ngOnInit() {
  }

  goHome() {
    if (this.projectService.hasActiveProject()) {
      let fromThisProject = this.projectService.activeProject.displayName;
      this.router.navigate(['/'], {queryParams: {fromProject: fromThisProject}});
    }else{
      this.router.navigate(['/']);

    }
  }
}
