import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-anciendonnes',
  templateUrl: './anciendonnes.component.html',
  styleUrls: ['./anciendonnes.component.css']
})
export class AnciendonnesComponent implements OnInit {
  loginForm! : FormGroup; 
  constructor(private userService: UserService, 
    private router:Router,
    private toastr: ToastrService) {
    this.loginForm = new FormGroup({
      password: new FormControl('', Validators.required) , 
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") ]),
    });
   }
   get email(){ return this.loginForm.get('email')};
   get password(){ return this.loginForm.get('password')};

  ngOnInit(): void {
  }


  login(){
    let data = this.loginForm.value;
    let md5 = new Md5();
    data.password = md5.appendStr(data.password).end();  
    console.log(data);
    this.userService.loginUser(data).subscribe({
      next: (res:any) => { console.log(res)
        if(res && res.idUser){ console.log("okkkkkkkkk")
           // changer le  menu header   
          // localStorage.setItem("userInfo", JSON.stringify(res)); 
          // this.eventService.publish('connected');  
          this.router.navigate(['profil/newdonnes'])
         
           return; 

        }else{
          this.toastr.error('Verifier Votre email et mot de passe', 'Erreur', { timeOut: 2000, });
        }
      },
      error: (e) => console.error(e), 
    }) 
  }
  
  

}






