// import { Component, OnInit,Output, } from '@angular/core';
// import { GithubService } from '../github.service';
// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent implements OnInit {
// profile: any[];
// repos: any[];
// username: string;

//   constructor( private githubservice: GithubService) { }

//     findProfile(username){
//       this.githubservice.updateProfile(this.username);
//       this.githubservice.getProfileInfo().subscribe((profile: any[]) => {
//         console.log(profile);
//         this.profile = profile;
//       });

//       this.githubservice.getProfileRepos().subscribe((repos:any[])=>{
//       console.log(repos);
//       this.repos = repos;

//   })
//  }
//  ngOnInit(): void {
// }

// }
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Profile } from '../profile';
import { GithubService } from '../github.service';
import {User } from '../user';
@Component({
   selector: 'app-profile',
   templateUrl: './profile.component.html',
   styleUrls: ['./profile.component.css']
   })
export class ProfileComponent  implements OnInit {
  @Output() findProfile = new EventEmitter<any>();
  UserName: string;
  
  constructor( private githubservice: GithubService){
    
    
  }
 getProfile() {
    this.findProfile.emit(this.UserName);
   
    this.UserName;                                                          
  }
  ngOnInit(): void {
  }
}
















