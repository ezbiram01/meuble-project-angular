import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css']
})
export class ListTableComponent implements OnInit {

  produitList:any=[];
  userId!:number ; 
  user:any; 
  constructor( private produitService: ProduitService,
    private toastr: ToastrService) { 
      this.userId = JSON.parse(localStorage.getItem('userInfo')!).idUser ;
      this.user = JSON.parse(localStorage.getItem('userInfo')!) ;
      console.log("id of user connected : "+this.userId)
    }

  ngOnInit(): void {
      this.getAll1();
   
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
        if(res[i].categ.id==10 ){
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