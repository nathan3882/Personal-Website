import {Injectable} from '@angular/core';

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
