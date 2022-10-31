import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChamberService {

  constructor(private http:HttpClient) { }

  
  addProduit(produit:any){
    return  this.http.post<any>("https://lylyqcontinental-backend.herokuapp.com/api/Chamber/addProduit/", produit);
  }
  

  getAll() { 
    return  this.http.get("https://lylyqcontinental-backend.herokuapp.com/api/Chamber/all");
  }

 
  delete(id:number){
    return  this.http.delete<any>("https://lylyqcontinental-backend.herokuapp.com/api/Chamber/delete/"+id);
  }

  addByAdmin(produit:any){
    return  this.http.post<any>("https://lylyqcontinental-backend.herokuapp.com/api/Chamber/addByAdmin/", produit);
  }

  edit(produit:any){ 
    return  this.http.put<any>("https://lylyqcontinental-backend.herokuapp.com/api/Chamber/edit", produit);
  }

  getDetails(id:number){
    return  this.http.get("https://lylyqcontinental-backend.herokuapp.com/api/Chamber/show/"+id);
  }


  getCoursByAdmin(id:number){
    return  this.http.get("https://lylyqcontinental-backend.herokuapp.com/api/Chamber/allByAdmin/"+id);
  }
  
  upploadCours(app:any){ 
    return  this.http.post<any>("https://lylyqcontinental-backend.herokuapp.com/api/Chamber/uploadCours", app);
  }


}

  



  


