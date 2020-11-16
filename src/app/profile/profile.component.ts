
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
















