import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategorieService } from 'src/app/services/categorie.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-edit-pouf',
  templateUrl: './edit-pouf.component.html',
  styleUrls: ['./edit-pouf.component.css']
})
export class EditPoufComponent implements OnInit {
  addForm!: FormGroup; 
  categList:any=[];
  id!:number; 
  produit:any={};
  constructor(private produitService: ProduitService, 
      private categService: CategorieService,
      private router: Router,
      private activateRoute:ActivatedRoute,
      private toastr: ToastrService) {   	
      this.addForm = new FormGroup({
      title: new FormControl('', Validators.required) ,
      source: new FormControl('', Validators.required),
      categorie: new FormControl('', Validators.required),

    });
    this.id = parseInt(this.activateRoute.snapshot.paramMap.get('id')!); 
    console.log(this.id)
    this.produitService.getDetails(this.id).subscribe({
      next: (res) => {
        this.produit = res ; 
      },
      error: (e) => console.error(e), 
    }) 
  }

  ngOnInit(): void {
    this.categService.getALL().subscribe({
      next: (res) => {
        this.categList = res; 
      },
      error: (e) => console.error(e), 
    }) 
  }
  
  edit(){ 
    let data = {id: this.id , title: this.addForm.value.title, 
      source:this.addForm.value.source, 
      categorie: this.addForm.value.categorie, } ; 
    if (confirm('Voulez vous vraiment modifier cette Produit !!?')) {  
    this.produitService.edit(data).subscribe({ 
      next: (res) => {console.log(res)
        if(res.status=="success"){
          this.toastr.success('modifie effectuée avec success', 'Success', { timeOut: 2000, });
         this.router.navigate(['admin/produit']); 
        }else{
          this.toastr.error("Erreur de modifie ", 'Erreur', { timeOut: 2000, });
        }
      },
      error: (e) => console.error(e), 
    }) 
  }
}
}
