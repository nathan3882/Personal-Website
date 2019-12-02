import {Injectable} from '@angular/core';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LocationService {

    queryParamSubscription: Subscription;
    private _fromProject: string;
    router: Router;

    constructor() {
    }

    public fromProject(): string {
        return this._fromProject === undefined ? '' : this._fromProject;
    }

    public setFromProject(fromProject: string) {
        this._fromProject = fromProject;
    }

    public redirectToProject(projectName: string): Promise<boolean> {
        return this.router.navigateByUrl('/project/' + projectName);
    }

    public redirectToLink(link: string, newTab: boolean): void {
        window.open(link, "_blank");
    }

}
