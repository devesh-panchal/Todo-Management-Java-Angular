import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public basicAuthenticationService : BasicAuthenticationService, public router:Router) { }

  ngOnInit(): void {
  }

  homeClick(){
    this.router.navigate(['welcome', sessionStorage.getItem('authenticaterUser')])

  }

  titleClick(){

    if(this.basicAuthenticationService.isUserLoggedIn())
      {
        this.router.navigate(['welcome',sessionStorage.getItem('authenticaterUser')])
      }
      else{
        this.router.navigate(['login'])

      }
  }

}
