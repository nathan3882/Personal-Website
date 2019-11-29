import { Injectable } from '@angular/core';
import {Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  queryParamSubscription: Subscription;
  private _fromProject: string;

  constructor() { }

  public fromProject():string {
    return this._fromProject === undefined ? "" : this._fromProject;
  }

  public setFromProject(fromProject: string) {
    this._fromProject = fromProject;
  }

}
