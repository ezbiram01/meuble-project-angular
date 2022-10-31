import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategorieService } from 'src/app/services/categorie.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {

  addForm!: FormGroup; 
  categList:any=[];

  
  produitList:any=[];
  userId!:number ; 
  user:any; 
  filter!:string;
  constructor( private produitService: ProduitService,
    private categService: CategorieService,

    private toastr: ToastrService) { 

      this.addForm = new FormGroup({
       
      categorie: new FormControl('', Validators.required),
  
      });
      this.userId = JSON.parse(localStorage.getItem('userInfo')!).idUser ;
      this.user = JSON.parse(localStorage.getItem('userInfo')!) ;
      console.log("id of user connected : "+this.userId)
    }

  ngOnInit(): void {
      this.getAll();

      


   
  }

  getAll(){
    this.produitService.getAll().subscribe({
      next: (res) => {
        this.produitList = res ; 
      },
      error: (e) => console.error(e), 
    }) 
  }

  getAll1(){
  this.produitService.getAll().subscribe({
    next: (res:any) => {
      console.log(res)
      for(let i=0; i<res.length; i++){
        if(res[i].categ.id==3){
          this.produitList.push(res[i]);
        }
      } 
    },
    error: (e) => console.error(e), 
  }) 

  }
  getAll2(){
    this.produitService.getAll().subscribe({
      next: (res:any) => {
        console.log(res)
        for(let i=0; i<res.length; i++){
          if(res[i].categ.designation==='Canape'){
            this.produitList.push(res[i]);
          }
        } 
      },
      error: (e) => console.error(e), 
    }) 
  
    }
  
 

  deleteProduit(id:number){
    if (confirm('Voulez vous vraiment supprimer cette Produit !!?')) {
      this.produitService.delete(id).subscribe({
        next: (res) => {
          if(res.status=="success"){
            this.toastr.success('Suppression effectuée avec success', 'Success', { timeOut: 2000, });
            this.getAll();
          }else{
            this.toastr.error('Erreur de Suppression', 'Erreur', { timeOut: 2000, });
          }
        },
        error: (e) => console.error(e), 
      }) 
    }
    
  }
  

}