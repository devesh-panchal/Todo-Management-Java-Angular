import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  // authenticate(username: string, password: string) {
  //   if(username==="devesh" && password === "dummy") {
  //     sessionStorage.setItem('authenticaterUser', username);
  //     return true;
  //   }
  //   return false;
  // }

  executeJWTAuthenticationService(username: string, password: string) {
    
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    // let headers = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    //   })

    return this.http.post<AuthenticationBean>(
      `http://localhost:8080/authenticate`,
      {username,password}).pipe(
        map(
          data => {
            sessionStorage.setItem("authenticaterUser", username);
            sessionStorage.setItem("token", `Bearer ${data.token}`);
            return data;
          }
        )
      );
  }
  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticaterUser')
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
      {
      return sessionStorage.getItem('token')
      }
  }
  
  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
    sessionStorage.removeItem('token')

  }
}


export class AuthenticationBean {
  [x: string]: string;
  constructor(public message: string) { }
}