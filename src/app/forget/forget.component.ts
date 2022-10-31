import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Md5 } from 'ts-md5';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
  forgetForm! : FormGroup;  
  constructor(private userService: UserService,  
    private router:Router,
    private toastr: ToastrService) {
    this.forgetForm = new FormGroup({ 
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") ]),
    });
   }
   get email(){ return this.forgetForm.get('email')};

  ngOnInit(): void { 
  }


  getPassword(){
    let data = this.forgetForm.value
    var randPassword = Array(10).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz").map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
    let md5 = new Md5();
    let passwordCrypted  = md5.appendStr(randPassword).end();  
    data = Object.assign(data, {password: randPassword, passwordCrypted:passwordCrypted })
    console.log(data)
    this.userService.getPassword(data).subscribe({
      next: (res:any) => { console.log(res)
        if(res.status=="success"){
          this.toastr.success(res.result, 'Success', { timeOut: 2000, }); 
          this.forgetForm.reset();
          this.router.navigate(['/login']); 

        }else if(res.status=="warning"){
          this.toastr.warning(res.result, 'Warning', { timeOut: 2000, }); 
        }else{
          this.toastr.error("Erreur Systeme ", 'Erreur', { timeOut: 2000, });
        }
      },
      error: (e) => console.error(e), 
    }) 
  }

}
