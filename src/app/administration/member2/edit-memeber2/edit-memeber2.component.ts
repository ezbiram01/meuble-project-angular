import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Member2Service } from 'src/app/services/member2.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-edit-memeber2',
  templateUrl: './edit-memeber2.component.html',
  styleUrls: ['./edit-memeber2.component.css']
})
export class EditMemeber2Component implements OnInit {
  addForm!: FormGroup; 
  idApp!:number; 
  app:any={};
  constructor(private member2Service: Member2Service, 
    private router: Router,
    private toastr: ToastrService,
    private activateRoute: ActivatedRoute) { 
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
    this.idApp = parseInt(this.activateRoute.snapshot.paramMap.get('id')!); 
  
    this.member2Service.getDetails(this.idApp).subscribe({
      next: (res) => {
        this.app = res ; 
      },
      error: (e) => console.error(e), 
    }) 
  }
  get tel(){ return this.addForm.get('tel')};
  get email(){ return this.addForm.get('email')};
  ngOnInit(): void {
  }

  editMember1(){ 
    let data = {idUser: this.idApp, lastName: this.addForm.value.lastName ,firstName: this.addForm.value.firstName,
      gender: this.addForm.value.gender, country: this.addForm.value.country, region: this.addForm.value.region,
      tel: this.addForm.value.tel, email: this.addForm.value.email ,password: this.addForm.value.password ,role:"MEMBER2"} ;
      
      
      let md5 = new Md5();
      data.password = md5.appendStr(data.password).end(); 
      console.log(data)


    if (confirm('Voulez vous vraiment modifier cette Membres  !!?')) {
    this.member2Service.edit(data).subscribe({
      next: (res) => {
        if(res.status=="success"){
          this.toastr.success('modifie effectu??e avec success', 'Success', { timeOut: 2000, });
         this.router.navigate(['member2/']); 
        }else{
          this.toastr.error("Erreur de modifie ", 'Erreur', { timeOut: 2000, });
        }
      },
      error: (e) => console.error(e), 
    }) 
  }

}}
