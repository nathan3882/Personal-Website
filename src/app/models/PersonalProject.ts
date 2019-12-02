export class PersonalProject {

  displayName: string;
  githubLink: string;
  path: string;
  tagLine: string;

  constructor() {
  }

  public setDisplayName(displayName: string): PersonalProject {
    this.displayName = displayName;
    return this;
  }

  public setPath(path: string): PersonalProject {
    this.path = path;
    return this;
  }

  public setTagline(tagLine: string): PersonalProject {
    this.tagLine = tagLine;
    return this;
  }

  public setGithubLink(githubLink: string): PersonalProject {
    this.githubLink = githubLink;
    return this;
  }

}
