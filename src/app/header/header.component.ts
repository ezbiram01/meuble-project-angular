import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    isLogged:boolean = false; 

    isSUPERADMIN:boolean = false;
    isAdmin:boolean = false; 
    isMemberN1:boolean = false; 
    isMemberN2:boolean = false; 
    isMemberN3:boolean = false;
    user:any; 
  
  
   
    
    constructor(private eventService: EventService,
      private router:Router,
      public translate: TranslateService
     ) {
      this.eventService.subscribe('logout', (data) => {
        this.isLogged = false;
      })
      this.eventService.subscribe('connected', (data) => {
        this.isLogged = true;
  
      })
      //actualiser header pour voir changement de donnéres de profil
    /* this.eventService.subscribe('refreshStorage', (data) => {
        this.user = JSON.parse(localStorage.getItem("userInfo")!);  
      })
      console.log("test:   ", localStorage.getItem("userInfo")!)
     this.user =  JSON.parse(localStorage.getItem("userInfo")!);*/
    
    }
        
  
    ngOnInit(): void {
      let user = localStorage.getItem("userInfo");  
      
      if(user){
        this.isLogged = true ; 
      }else{
        this.isLogged = false;
      } 
      
      this.user = JSON.parse(localStorage.getItem("userInfo")!);  
      if(this.user.role==="ADMIN"){
        this.isAdmin = true ;
      } else if(this.user.role==="MEMBER1"){
        this.isMemberN1 = true ;
      } else if(this.user.role==="MEMBER2"){
        this.isMemberN2 = true ;
      } else if(this.user.role==="MEMBER3"){
        this.isMemberN3 = true ;
      }  else if(this.user.role==="SUPERADMIN"){
        this.isSUPERADMIN = true ;
      } 
    }
  
  
  
    
    
    logout(){
      localStorage.removeItem("userInfo");
      localStorage.clear();
      this.router.navigate(['/'])
      this.eventService.publish('logout'); 
      
    }
  
   
  
  }
  