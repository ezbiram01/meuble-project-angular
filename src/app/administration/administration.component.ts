import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  
  isSUPERADMIN:boolean = false; 

  isAdmin:boolean = false; 
  isMemberN1:boolean = false; 
  isMemberN2:boolean = false; 
  isMemberN3:boolean = false;
  user:any; 
  constructor(private router:Router,
    private eventService: EventService) {

         //actualiser header pour voir changement de donnéres de profil
    this.eventService.subscribe('refreshStorage', (data) => {
      this.user = JSON.parse(localStorage.getItem("userInfo")!);  
    })

    this.user =  JSON.parse(localStorage.getItem("userInfo")!);
    if(this.user.role==="ADMIN"){
      this.isAdmin = true ;
    } else if(this.user.role==="MEMBER1"){
      this.isMemberN1 = true ;
    } else if(this.user.role==="MEMBER2"){
      this.isMemberN2 = true ;
    } else if(this.user.role==="MEMBER3"){
      this.isMemberN3 = true ;
    } 
    else if(this.user.role==="SUPERADMIN"){
    this.isSUPERADMIN = true ;
  } 
  }

  ngOnInit(): void { 
  }

  logout(){
    localStorage.removeItem("userInfo");
    localStorage.clear();
    this.router.navigate(['/'])
    this.eventService.publish('logout'); 
  }

}
