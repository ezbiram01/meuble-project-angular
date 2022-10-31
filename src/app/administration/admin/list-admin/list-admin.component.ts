import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {
  adminsList:any=[];
  constructor( private adminService: AdminService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllAdmins();
  }

  getAllAdmins(){
    this.adminService.getALL().subscribe({
      next: (res) => {
        this.adminsList = res ; 
      },
      error: (e) => console.error(e), 
    }) 
  }
  

 

  deleteAdmins(id:number){
    if (confirm('Voulez vous vraiment supprimer cette Admin !!?')) {
    this.adminService.delete(id).subscribe({
      next: (res) => {
        if(res.status=="success"){
          this.toastr.success('Suppression effectuée avec success', 'Success', { timeOut: 2000, });
          this.getAllAdmins();
        }else{
          this.toastr.error('Erreur de Suppression', 'Erreur', { timeOut: 2000, });
        }
      },
      error: (e) => console.error(e), 
    }) 
  }}
 /*deleteAdmins(id:number){
    this.adminService.delete(id).subscribe({
      next: (res) => {
        if(res.status=="success"){
          this.toastr.success('Suppression effectuée avec success', 'Success', { timeOut: 2000, });
          this.getAllAdmins();
        }else{
          this.toastr.error('Erreur de Suppression', 'Erreur', { timeOut: 2000, });
        }
      },
      error: (e) => console.error(e), 
    }) 
  }*/

  
  getAllUsers() {
    throw new Error('Method not implemented.');
  }
  
  }
