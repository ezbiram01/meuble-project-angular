import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';
import { EventService } from 'src/app/services/event.service';
import { Member1Service } from 'src/app/services/member1.service';
import { Member2Service } from 'src/app/services/member2.service';
import { Member3Service } from 'src/app/services/member3.service';
import { UserService } from 'src/app/services/user.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-newdonnes',
  templateUrl: './newdonnes.component.html',
  styleUrls: ['./newdonnes.component.css']
})
export class NewdonnesComponent implements OnInit {
  registerForm!: FormGroup; 
  user:any={};


  constructor(private member1Service: Member1Service, 
    private member2Service: Member2Service, 
    private member3Service: Member3Service,
    private adminService: AdminService,
    private toastr:  ToastrService,
    private eventService: EventService,
    private router: Router,
    private userService: UserService
   ) { 

    this.eventService.subscribe('refreshStorage', (data) => {
      this.user = JSON.parse(localStorage.getItem("userInfo")!);  
    })

    this.user = JSON.parse(localStorage.getItem("userInfo")!);
   

    this.registerForm = new FormGroup({  
     // lastName: new FormControl('', Validators.required), 
     // firstName: new FormControl('', Validators.required) , 
      //gender: new FormControl('', Validators.required) , 
      //country: new FormControl('', Validators.required) , 
      //region: new FormControl('', Validators.required) , 
      //tel: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern("^-?[0-9]\\d*(\\.\\d{1,4})?$")]),
      //email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") ]),
      password: new FormControl('', Validators.required)   
    });
   }
   get tel(){ return this.registerForm.get('tel')};
   get email(){ return this.registerForm.get('email')};
 
  ngOnInit(): void {
  }

  editProfil(){   //console.log("gooooooooooo")
    let data = this.registerForm.value;
    let md5 = new Md5(); 
    data.password = md5.appendStr(data.password).end(); 

    if(this.user.role=="ADMIN"){
      data = Object.assign(data, {firstName:this.user.firstName,lastName:this.user.lastName , gender:this.user.gender,
        region:this.user.region,email:this.user.email,country:this.user.country, tel:this.user.tel,   idUser:this.user.idUser, role:"ADMIN"})
           this.saveAdmin(data);
      return
    }else if(this.user.role=="MEMBER1"){
    data = Object.assign(data, {firstName:this.user.firstName,lastName:this.user.lastName , gender:this.user.gender,
      region:this.user.region,email:this.user.email,country:this.user.country, tel:this.user.tel,   idUser:this.user.idUser, role:"MEMBER1"})
    this.saveMember1(data);
    }
    else if(this.user.role=="MEMBER2"){
      data = Object.assign(data, {firstName:this.user.firstName,lastName:this.user.lastName , gender:this.user.gender,
        region:this.user.region,email:this.user.email,country:this.user.country, tel:this.user.tel,   idUser:this.user.idUser, role:"MEMBER2"})
      this.saveMember2(data);
      }
      else if(this.user.role=="MEMBER3"){
        data = Object.assign(data, {firstName:this.user.firstName,lastName:this.user.lastName , gender:this.user.gender,
          region:this.user.region,email:this.user.email,country:this.user.country, tel:this.user.tel,   idUser:this.user.idUser, role:"MEMBER3"})
        this.saveMember3(data);
        }
    
  }

  saveAdmin(data:any){ 
    console.log(data)
    if (confirm('Voulez vous vraiment modifier vous données !!?')) {
    this.adminService.edit(data).subscribe({
      next: (res) => {
        if(res.status=="success"){
          localStorage.setItem("userInfo", JSON.stringify(data));
          this.eventService.publish('refreshStorage');  
          this.toastr.success('Modification effectuée avec success', 'Success', { timeOut: 2000, }); 
          this.router.navigate(['/'])


        }else{
          this.toastr.error("Erreur de Modification ", 'Erreur', { timeOut: 2000, });
        }
         
      },
      error: (e) => console.error(e), 
    }) 
  }}




  saveMember1(data:any){   
    console.log(data)
  if (confirm('Voulez vous vraiment modifier vous données !!?')) {
    this.member1Service.edit(data).subscribe({
      next: (res) => {
        if(res.status=="success"){
          localStorage.setItem("userInfo", JSON.stringify(data));
          this.eventService.publish('refreshStorage');  
          this.toastr.success('Modification effectuée avec success', 'Success', { timeOut: 2000, }); 

        }else{
          this.toastr.error("Erreur de Modification ", 'Erreur', { timeOut: 2000, });
        }
         
      },
      error: (e) => console.error(e), 
    }) 
  }
}


saveMember2(data:any){   
  console.log(data)
if (confirm('Voulez vous vraiment modifier vous données !!?')) {
  this.member2Service.edit(data).subscribe({
    next: (res) => {
      if(res.status=="success"){
        localStorage.setItem("userInfo", JSON.stringify(data));
        this.eventService.publish('refreshStorage');  
        this.toastr.success('Modification effectuée avec success', 'Success', { timeOut: 2000, }); 

      }else{
        this.toastr.error("Erreur de Modification ", 'Erreur', { timeOut: 2000, });
      }
       
    },
    error: (e) => console.error(e), 
  }) 
}
}


saveMember3(data:any){   
  console.log(data)
if (confirm('Voulez vous vraiment modifier vous données !!?')) {
  this.member3Service.edit(data).subscribe({
    next: (res) => {
      if(res.status=="success"){
        localStorage.setItem("userInfo", JSON.stringify(data));
        this.eventService.publish('refreshStorage');  
        this.toastr.success('Modification effectuée avec success', 'Success', { timeOut: 2000, }); 

      }else{
        this.toastr.error("Erreur de Modification ", 'Erreur', { timeOut: 2000, });
      }
       
    },
    error: (e) => console.error(e), 
  }) 
}
}
logout(){
  localStorage.removeItem("userInfo");
  localStorage.clear();
  this.router.navigate(['/'])
  this.eventService.publish('logout'); 
}


changementpass(){
  let data = this.registerForm.value
  console.log(data)
  this.userService.changementpass(data).subscribe({
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
