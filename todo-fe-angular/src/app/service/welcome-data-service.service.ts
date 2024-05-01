import { HttpClient } from '@angular/common/http';
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
  return this.http.get<HelloWorldBean>('http://localhost:8081/hello-world-bean/'+name)

}

}
