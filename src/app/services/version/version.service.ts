import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  currentVersionString: string = '1.3.3';

  constructor() {
  }
}
