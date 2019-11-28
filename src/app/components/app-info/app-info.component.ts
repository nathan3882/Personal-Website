import {Component, Injectable, OnInit} from '@angular/core';
import {VersionService} from '../../services/version.service';

@Component({
  selector: 'app-app-info',
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.css']
})
@Injectable()
export class AppInfoComponent implements OnInit {

  constructor(private versionService: VersionService) { }

  ngOnInit() {
  }

}
