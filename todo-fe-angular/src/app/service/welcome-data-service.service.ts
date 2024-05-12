import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface HelloWorldBean{
  message:string
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataServiceService {

  constructor(private http:HttpClient) { }

  getWelcomeData(){
    return this.http.get<HelloWorldBean>('http://localhost:8081/hello-world-bean')

  }

  getWelcomeDataParam(name:string)
{
  // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

  // let headers = new HttpHeaders({
  //   Authorization: basicAuthHeaderString
  // })
  return this.http.get<HelloWorldBean>('http://localhost:8081/hello-world-bean/'+name)

}
// createBasicAuthenticationHttpHeader() {
//   let username = 'in28minutes'
//   let password = 'dummy'
//   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
//   return basicAuthHeaderString;
// }
}
