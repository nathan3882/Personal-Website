export class PersonalProject {

    displayName: string;
    githubLink: string;
    path: string;
    buttonName: string;
    tagLine: string;

    constructor() {
    }

    public setButtonName(buttonName: string): PersonalProject {
        this.buttonName = buttonName;
        return this;
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
