import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataServiceService } from '../service/welcome-data-service.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name:any='';

  welcomeMessageFromService:string = ''



  constructor(    private route:ActivatedRoute,private WelcomeDataServiceService : WelcomeDataServiceService
  ) { }

  ngOnInit(): void {

    this.name = sessionStorage.getItem('authenticaterUser')


    //this.name = this.route.snapshot.params['name'];

  }

  getWelcomeMessage(){

    this.WelcomeDataServiceService.getWelcomeData().subscribe(
      x=>{console.log(x.message),this.welcomeMessageFromService=x.message},
      error=>{console.log(error),this.welcomeMessageFromService=error.error.message})

  }

  getWelcomeMessagewithParam(){

    this.WelcomeDataServiceService.getWelcomeDataParam(this.name).subscribe(
      x=>{console.log(x.message),this.welcomeMessageFromService=x.message},
      error=>{console.log(error),this.welcomeMessageFromService=error.error.message})

  }


}
