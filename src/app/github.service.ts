// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/map';
// @Injectable({
//   providedIn: 'root'
// })
// export class GithubService {

//   username: string;
//   clientid = '6bca4127ceb6946ade08';
//   clientsecret = ' aa1799148780768f3848fee3b443d95ad118b0df';



//   constructor(private http: HttpClient) {
//     console.log(" okay");
//     this.username = 'BenardBett';
//   }

//   getProfileInfo() {
//     return this.http.get ("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
//   }
//   getProfileRepos() {
//     return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
//   }
//   updateProfile(username: string) {
//     this.username = username;
//   }
// };
import { Injectable } from '@angular/core';
import { Profile } from './profile';
import { HttpClient } from '@angular/common/http';
import { environment} from '../environments/environment';
import { User} from './user';
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  profile: Profile;
  user: User;
  repos;


  constructor(private http: HttpClient) {
    this.profile = new Profile( '', '', '', '', 0, 0, 0);
    this.user = new User( '', '', '', new Date());
  }
  getUser(UserName: string){
    interface ApiResponse{
      name: string;
       login: string;
       avatar_url: string;
       bio: string;
       public_repos: number;
       followers: number;
       following: number;
    }
    const promise = new Promise((resolve, reject) => {
      const apiURL = 'https://api.github.com/users/' + UserName + '?access_token=' + environment.apiKey;
      this.http.get<ApiResponse>(apiURL)
        .toPromise()
        .then(
          res => { // Success
            this.profile = res;
            resolve();
          },
          (error) => {
            reject();
          }
        );
    });
    return promise;
  }
  getUserRepos(UserName: string){
    interface ApiResponse{
      name: string;
      description: string;
      language: string;
      created_at: Date;

    }

    const promise = new Promise((resolve, reject) => {
      const apiURL = 'https://api.github.com/users/' + UserName + '/repos?access_token=' + environment.apiKey;
      this.http.get<ApiResponse>(apiURL)
        .toPromise()
        .then(
          res => {
            this.user = res;
            resolve();
          },
          (error) => {
            reject();
          }
        );
    });
    return promise;

  }
  getRepo(user){
    interface ApiResponse{



    }

    const promise = new Promise((resolve, reject) => {
      const apiURL = 'https://api.github.com/search/repositories?q=' + user + '&order=asc?access_token=' + environment.apiKey;
      this.http.get<ApiResponse>(apiURL)
        .toPromise()
        .then(
          res => {
            this.repos = res;
            resolve();
          },
          (error) => {
            reject();
          }
        );
    });
    return promise;

  }

}
