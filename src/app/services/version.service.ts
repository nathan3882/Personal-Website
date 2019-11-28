import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  currentVersionString: string = "1.0";

  constructor() { }
}
