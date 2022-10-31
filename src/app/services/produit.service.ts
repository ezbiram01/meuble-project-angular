import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) { }

  
  addProduit(produit:any){
    return  this.http.post<any>("https://lylyqcontinental-backend.herokuapp.com/api/Produit/addProduit/", produit);
  }
  

  getAll() { 
    return  this.http.get("https://lylyqcontinental-backend.herokuapp.com/api/Produit/all");
  }

 
  delete(id:number){
    return  this.http.delete<any>("https://lylyqcontinental-backend.herokuapp.com/api/Produit/delete/"+id);
  }

  addByAdmin(produit:any){
    return  this.http.post<any>("https://lylyqcontinental-backend.herokuapp.com/api/Produit/addByAdmin/", produit);
  }

  edit(produit:any){ 
    return  this.http.put<any>("https://lylyqcontinental-backend.herokuapp.com/api/Produit/edit", produit);
  }

  getDetails(id:number){
    return  this.http.get("https://lylyqcontinental-backend.herokuapp.com/api/Produit/show/"+id);
  }


  getCoursByAdmin(id:number){
    return  this.http.get("https://lylyqcontinental-backend.herokuapp.com/api/Produit/allByAdmin/"+id);
  }
  
  upploadCours(app:any){ 
    return  this.http.post<any>("https://lylyqcontinental-backend.herokuapp.com/api/Produit/uploadCours", app);
  }


}

  



  


