import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public hardcodedAuthenticationService : HardcodedAuthenticationService, public router:Router) { }

  ngOnInit(): void {
  }

  homeClick(){
    this.router.navigate(['welcome', sessionStorage.getItem('authenticaterUser')])

  }

  titleClick(){

    if(this.hardcodedAuthenticationService.isUserLoggedIn())
      {
        this.router.navigate(['welcome',sessionStorage.getItem('authenticaterUser')])
      }
      else{
        this.router.navigate(['login'])

      }
  }

}
