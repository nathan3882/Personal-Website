import {Injectable} from '@angular/core';
import {PersonalProject} from "../../models/PersonalProject";

@Injectable({
  providedIn: 'root'
})
export class DidYouLikeService {

  constructor() {
  }

  public performLike(project: PersonalProject) {

  }

  getLikesCookieName(s: string) {
    return 'did-you-like-' + s;
  }

  getDislikesCookieName(s: string) {
    return 'did-you-dislike-' + s;
  }

}
