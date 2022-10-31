import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-edit-categorie',
  templateUrl: './edit-categorie.component.html',
  styleUrls: ['./edit-categorie.component.css']
})
export class EditCategorieComponent implements OnInit {
  
  addForm!: FormGroup; 
  idCateg!:number; 
  categ:any={};

  constructor(private categService: CategorieService, 
    private router: Router, 
    private activateRoute:ActivatedRoute,
    private toastr: ToastrService) { 
      
    this.addForm = new FormGroup({
      designation: new FormControl('', Validators.required) 
    });

    
    this.idCateg = parseInt(this.activateRoute.snapshot.paramMap.get('id')!); 
    this.categService.getDetails(this.idCateg).subscribe({
      next: (res) => {
        this.categ = res ; 
      },
      error: (e) => console.error(e), 
    }) 
  }

  ngOnInit(): void {
  }

  editCategorie(){
    let data = {id: this.idCateg, designation: this.addForm.value.designation} ; 
    if (confirm('Voulez vous vraiment modifier cette Categorie !!?')) {

    this.categService.edit(data).subscribe({
    next: (res) => {
      if(res.status=="success"){
        this.toastr.success('modifie effectuée avec success', 'Success', { timeOut: 2000, });
        this.router.navigate(['admin/categorie']); 
      }else{
        this.toastr.error("Erreur de modifie ", 'Erreur', { timeOut: 2000, });
      }
       
    },
    error: (e) => console.error(e), 
  })} }


}
