import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategorieService } from 'src/app/services/categorie.service';
import { ChamberService } from 'src/app/services/chamber.service';

@Component({
  selector: 'app-add-chamber',
  templateUrl: './add-chamber.component.html',
  styleUrls: ['./add-chamber.component.css']
})
export class AddChamberComponent implements OnInit {
  addForm!: FormGroup; 
  categList:any=[];
  user: any ; // data of user connected 
  selectedFile!:string; //  file a uploader
  fileName!:string ; // nom de fichier
  dataOfCoursToSave:any ; 
  constructor(private chamberService: ChamberService, 
      private categService: CategorieService,
      private router: Router,
      private toastr: ToastrService) {   
        
        this.user = JSON.parse(localStorage.getItem("userInfo")!);

    this.addForm = new FormGroup({
      title: new FormControl('', Validators.required) ,
      source: new FormControl('', Validators.required),
      source1: new FormControl('', Validators.required),
      source2: new FormControl('', Validators.required),
      source3: new FormControl('', Validators.required),

      categorie: new FormControl('', Validators.required),

    });
  }

  ngOnInit(): void {
    this.categService.getALL().subscribe({
      next: (res) => {
        this.categList = res; 
      },
      error: (e) => console.error(e), 
    }) 
  }
  
  add(){
        let data = this.addForm.value; 
        if(this.user.role =="ADMIN"){
          this.dataOfCoursToSave = Object.assign(data, {admin: this.user.idUser });
          this.addCoursAdmin();
        }else if(this.user.role =="ADMIN"){
          this.dataOfCoursToSave = Object.assign(data, {status: "En Attente", formateurId: this.user.idUser });
          this.addCoursAdmin();
        }
      }

  
 

  addCoursAdmin(){
    if (confirm('Voulez vous vraiment ajouter cette Produit !!?')) {
    this.chamberService.addByAdmin(this.dataOfCoursToSave).subscribe({
      next: (res) => {
        if(res.status=="success"){
          this.toastr.success('Ajout effectuée avec success', 'Success', { timeOut: 2000, });
          this.router.navigate(['admin/produit']); 
        }else{
          this.toastr.error("Erreur d'ajout ", 'Erreur', { timeOut: 2000, });
        }
         
      },
      error: (e) => console.error(e), 
    }) 
  }}

 


 

}
