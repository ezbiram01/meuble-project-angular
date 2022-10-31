import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {
  addForm!: FormGroup; 
  constructor(private categService: CategorieService, 
    private router: Router, 
    private toastr: ToastrService) { 
    this.addForm = new FormGroup({
      designation: new FormControl('', Validators.required) 
    });
  }

  ngOnInit(): void {
  }

  saveCategorie(){
    let data = this.addForm.value; 
    this.categService.add(data).subscribe({
      next: (res) => { 
       if(res.status=="success"){
          this.toastr.success('Ajout effectuée avec success', 'Success', { timeOut: 2000, });
          this.router.navigate(['admin/categorie']); 
        }else if(res.status=="exist"){  
          this.toastr.error("Erreur d'ajout, Catégorie déja existe ", 'Erreur', { timeOut: 2000, });
        }else{
          this.toastr.error("Erreur d'ajout ", 'Erreur', { timeOut: 2000, });
        }
         
      },
      error: (e) => console.error(e), 
    }) 
  }

}
