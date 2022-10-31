import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategorieService } from '../services/categorie.service';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    categList: any=[];
    produitList: any = []; 
    priceSelected:any ; // price selected
    catgeorieSelected:any=[] ; 
    niveauSelected:any=[]; 
    backupCoursList:any=[];
   
    constructor(private categService : CategorieService, 
      private produitService: ProduitService,
      private router: Router, 
      private activateRoute: ActivatedRoute,) { }
  
    ngOnInit(): void {
      this.categService.getALL().subscribe({
        next: (res) => { 
          this.categList = res; 
        },
        error: (e) => console.error(e), 
      }) 
      // get all cours
      this.produitService.getAll().subscribe({
        next: (res:any) => {
          console.log(res)
          for(let i=0; i<res.length; i++){
            if(res[i].categ.id==10){
  
              this.produitList.push(res[i]);
            }
          } 
        },
        error: (e) => console.error(e), 
      }) 
    }
    
  }
  