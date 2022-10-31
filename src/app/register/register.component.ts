import { Member1Service } from './../services/member1.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';
import { Md5 } from 'ts-md5';
import { Member3Service } from '../services/member3.service';
import { Member2Service } from '../services/member2.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm! : FormGroup ; 
  userRole:string="";

  dataToSaved:any; 
  constructor(private router: Router, 
    private toastr: ToastrService,
    private userService: UserService,
    private member1Service: Member1Service,
    private member2Service: Member2Service,
    private member3Service: Member3Service,

    ) { 
    this.registerForm = new FormGroup({ 
      role: new FormControl('', Validators.required), 
      lastName: new FormControl('', Validators.required), 
      firstName: new FormControl('', Validators.required) , 
      gender: new FormControl('', Validators.required) , 
      country: new FormControl('', Validators.required) , 
      region: new FormControl('', Validators.required) , 
      tel: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern("^-?[0-9]\\d*(\\.\\d{1,4})?$")]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") ]),
      password: new FormControl('', [Validators.required, Validators.minLength(12),])
    });
  }
  get tel(){ return this.registerForm.get('tel')};
  get password(){ return this.registerForm.get('password')};

  get email(){ return this.registerForm.get('email')};
  

  ngOnInit(): void {
  }

  register(){ 

    this.dataToSaved = this.registerForm.value ; 
    let md5 = new Md5();
    this.dataToSaved.password = md5.appendStr(this.dataToSaved.password).end(); 
    console.log(this.dataToSaved)   
    if(this.userRole=="MEMBER1"){ 
      this.saveMember1();
    }else if(this.userRole=="MEMBER2"){
        this.saveMember2();
    }else if(this.userRole=="MEMBER3"){
      this.saveMember3();
    }
    
   
  }


  saveMember1(){
    let dataToSaved = this.registerForm.value;
   // let md5 = new Md5();
   // dataToSaved.password = md5.appendStr(dataToSaved.password).end(); 
    console.log(dataToSaved) 
    this.member1Service.add(this.dataToSaved).subscribe({
      next: (res) => {  
        if(res.status=="success"){
          this.verifieEmailUser();
          this.toastr.success('Inscription effectuée avec succés', 'Success', { timeOut: 2000, });
          this.router.navigate(['/login']); 
        }else if(res.status=="exist"){  
          this.toastr.error("Erreur d'ajout, Email déja existe ", 'Erreur', { timeOut: 2000, });
        
        }else{
          this.toastr.error("Erreur d'Inscription ", 'Erreur', { timeOut: 2000, });
        }
      },
      error: (e) => console.error(e), 
    }) 
  }

  saveMember2(){
    let dataToSaved = this.registerForm.value;
    console.log(dataToSaved) 
    this.member2Service.add(this.dataToSaved).subscribe({
      next: (res) => {  
        if(res.status=="success"){
          this.verifieEmailUser();
          this.toastr.success('Inscription effectuée avec succés', 'Success', { timeOut: 2000, });
          this.router.navigate(['/login']); 
        }else if(res.status=="exist"){  
          this.toastr.error("Erreur d'ajout, Email déja existe ", 'Erreur', { timeOut: 2000, });
        
        }else{
          this.toastr.error("Erreur d'Inscription ", 'Erreur', { timeOut: 2000, });
        }
      },
      error: (e) => console.error(e), 
    }) 
  }

  saveMember3(){
    let dataToSaved = this.registerForm.value;
    console.log(dataToSaved) 
    this.member3Service.add(this.dataToSaved).subscribe({
      next: (res) => {  
        if(res.status=="success"){
          this.verifieEmailUser();
          this.toastr.success('Inscription effectuée avec succés', 'Success', { timeOut: 2000, });
          this.router.navigate(['/login']); 
        }else if(res.status=="exist"){  
          this.toastr.error("Erreur d'ajout, Email déja existe ", 'Erreur', { timeOut: 2000, });
        
        }else{
          this.toastr.error("Erreur d'Inscription ", 'Erreur', { timeOut: 2000, });
        }
      },
      error: (e) => console.error(e), 
    }) 
  }



  
  verifieEmailUser(){
    let data = this.registerForm.value
    console.log(data)
    this.userService.verifieEmailUser(data).subscribe({
      next: (res:any) => { console.log(res)
        if(res.status=="success"){
          this.toastr.success(res.result, 'Success', { timeOut: 2000, }); 
          this.registerForm.reset();
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
