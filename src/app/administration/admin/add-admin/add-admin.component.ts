import { AdminService } from './../../../services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  addForm!: FormGroup; 

  constructor(private adminService: AdminService, 
    private router: Router,
    private toastr: ToastrService,
    private userService: UserService,) { 
    this.addForm = new FormGroup({
      lastName: new FormControl('', Validators.required) ,
      firstName: new FormControl('', Validators.required) ,
      gender: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      region: new FormControl('', Validators.required),
      tel: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern("^-?[0-9]\\d*(\\.\\d{1,4})?$")]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") ]),
      password: new FormControl('', Validators.required), 




    });
  }

  get tel(){ return this.addForm.get('tel')};
  get email(){ return this.addForm.get('email')};

  ngOnInit(): void {
  }
  

  
  verifieEmailUser(){
    let data = this.addForm.value
    console.log(data)
    this.userService.verifieEmailUser(data).subscribe({
      next: (res:any) => { console.log(res)
        if(res.status=="success"){
          this.toastr.success(res.result, 'Success', { timeOut: 2000, }); 
          this.addForm.reset();
        }else if(res.status=="warning"){
          this.toastr.warning(res.result, 'Warning', { timeOut: 2000, }); 
        }else{
          this.toastr.error("Erreur Systeme ", 'Erreur', { timeOut: 2000, });
        }
      },
      error: (e) => console.error(e), 
    }) 
  }

  saveAdmin(){
    let data = Object.assign(this.addForm.value, {role:"ADMIN"});
    let md5 = new Md5();
    data.password = md5.appendStr(data.password).end(); 
    console.log(data) 
    if (confirm('Voulez vous vraiment ajouter cette Admin !!?')) {
    this.adminService.add(data).subscribe({
      next: (res) => {
        if(res.status=="success"){
          this.toastr.success('Ajout effectuée avec success', 'Success', { timeOut: 2000, });
          this.router.navigate(['admin/admin']); 
        }else if(res.status=="exist"){  
          this.toastr.error("Erreur d'ajout, Email déja existe ", 'Erreur', { timeOut: 2000, });
        
        }else{
          this.toastr.error("Erreur d'ajout ", 'Erreur', { timeOut: 2000, });
        }
         
      },
      error: (e) => console.error(e), 
    }) 

}}}
