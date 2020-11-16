
import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Profile } from '../profile';
import { User } from '../user';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-repo',
  templateUrl:'./repo.component.html',
  styleUrls: ['./repo.component.css']
})

export class RepoComponent implements OnInit {
  profile: Profile;
  user: User;
  User2 = environment.apiKey;

  constructor(public githubService: GithubService) { }
  getUser(UserName) {
    this.githubService.getUser(UserName).then(
      (success) => {
        this.profile = this.githubService.profile;
      },
      (error) => {
      }
    )
    this.githubService.getUserRepos(UserName).then(
      (success) => {
        this.user = this.githubService.user;
      },
      (error) => {
        console.log(error)
      }
    )
  }
  ngOnInit(): void {
    this.getUser('BenardBett');
  }
}
