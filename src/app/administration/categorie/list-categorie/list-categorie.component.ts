import { CategorieService } from './../../../services/categorie.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.css']
})
export class ListCategorieComponent implements OnInit {
  catgoriesList:any=[];
  constructor(private categService: CategorieService, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllCategories();
    
  }

  getAllCategories(){
    this.categService.getALL().subscribe({
      next: (res) => {
        this.catgoriesList = res ; 
      },
      error: (e) => console.error(e), 
    }) 
  }
  

  

  deleteCategorie(id:number){
    if (confirm('Voulez vous vraiment supprimer cette Catégorie !!?')) {
      this.categService.delete(id).subscribe({
        next: (res) => {
          if(res.status=="success"){
            this.toastr.success('Suppression effectuée avec success', 'Success', { timeOut: 2000, });
            this.getAllCategories();
          }else{
            this.toastr.error('Erreur de Suppression', 'Erreur', { timeOut: 2000, });
          }
        },
        error: (e) => console.error(e), 
      }) 
    }
    
  }

}
