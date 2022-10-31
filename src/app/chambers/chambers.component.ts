import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategorieService } from '../services/categorie.service';
import { ChamberService } from '../services/chamber.service';

@Component({
  selector: 'app-chambers',
  templateUrl: './chambers.component.html',
  styleUrls: ['./chambers.component.css']
})
export class ChambersComponent implements OnInit {
  categList: any=[];
  produitList: any = []; 
  priceSelected:any ; // price selected
  catgeorieSelected:any=[] ; 
  niveauSelected:any=[]; 
  backupCoursList:any=[];
 
  constructor(private categService : CategorieService, 
    private chamberService: ChamberService,
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
    this.chamberService.getAll().subscribe({
      next: (res:any) => {
        console.log(res)
        for(let i=0; i<res.length; i++){
          if(res[i].categ.id==13){

            this.produitList.push(res[i]);
          }
        } 
      },
      error: (e) => console.error(e), 
    }) 
  }
}