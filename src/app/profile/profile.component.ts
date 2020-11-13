import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile: any[];
repos: any[];
username: any[];
  constructor( private githubservice: GithubService) { 
    this.githubservice.getdata().subscribe((profile:any[])=>
    console.log(profile);
    this.profile= profile;
  }ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
);
  this.githubservice.getProfileRepos().subscribe((repos:any[]=>{
    console.log(repos);
    this.repos= repos;
  });
}
findProfile(){
  this.githubservice.updateProfile(this.username);
  this.githubservice.getdata().subscribed((profile:any[])=>{
    console.log(profile);
    this.profile=profile;
  });
  this.githubservice.getProfileRepos().subscribe((repos: any[]) => {
    console.log(repos);
    this.repos = repos;
  });
}
  ngOnInit(): void {
  }

}
