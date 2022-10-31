import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  
  user:any; 
  constructor(private router:Router,
    private eventService: EventService) {

         //actualiser header pour voir changement de donnéres de profil
    this.eventService.subscribe('refreshStorage', (data) => {
      this.user = JSON.parse(localStorage.getItem("userInfo")!);  
    })

    this.user =  JSON.parse(localStorage.getItem("userInfo")!);
    
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
