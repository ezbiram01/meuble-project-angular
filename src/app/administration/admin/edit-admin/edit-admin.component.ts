import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {

  addForm!: FormGroup; 
  idAdmin!:number; 
  adm:any={};

  constructor(private adminService: AdminService, 
    private router: Router,
    private activateRoute: ActivatedRoute,
    private toastr: ToastrService) {

    this.addForm = new FormGroup({
      lastName: new FormControl('', Validators.required) ,
      firstName: new FormControl('', Validators.required) ,
      gender: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      region: new FormControl('', Validators.required),
      tel: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern("^-?[0-9]\\d*(\\.\\d{1,4})?$")]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") ]),
      password: new FormControl('', Validators.required) 

    });
    this.idAdmin = parseInt(this.activateRoute.snapshot.paramMap.get('id')!); 
  
    this.adminService.getDetails(this.idAdmin).subscribe({
      next: (res) => {
        this.adm = res ; 
      },
      error: (e) => console.error(e), 
    }) 
  }
  get tel(){ return this.addForm.get('tel')};
  get email(){ return this.addForm.get('email')};
  ngOnInit(): void {
  }

  editAdmin(){ 
     

    let data = {idUser: this.idAdmin, lastName: this.addForm.value.lastName ,firstName: this.addForm.value.firstName,
      gender: this.addForm.value.gender, country: this.addForm.value.country, region: this.addForm.value.region,
      tel: this.addForm.value.tel, email: this.addForm.value.email ,password: this.addForm.value.password, role:"ADMIN"  } ;

      let md5 = new Md5();
      data.password = md5.appendStr(data.password).end(); 
      console.log(data)


    if (confirm('Voulez vous vraiment modifier cette Admin !!?')) {
    this.adminService.edit(data).subscribe({
      next: (res) => {
        if(res.status=="success"){
          this.toastr.success('modifie effectuée avec success', 'Success', { timeOut: 2000, });
         this.router.navigate(['admin/admin']); 
        }else{
          this.toastr.error("Erreur de modifie ", 'Erreur', { timeOut: 2000, });
        }
      
      },
      error: (e) => console.error(e), 
    }) 
  }

}}
