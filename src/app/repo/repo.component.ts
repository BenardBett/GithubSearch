import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  repos:any;
  profile: any;

  constructor( private githubservice: GithubService) {
      this.githubservice = githubservice;

   }
getProfileRepos(){}
  ngOnInit(): void{
    this.githubservice.getProfileRepos().subscribe((repos:any[])=>{
      console.log(repos);
      this.repos= repos;
    });

}
}