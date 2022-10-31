import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http:HttpClient) { }


  getALL(){
    return  this.http.get("https://lylyqcontinental-backend.herokuapp.com/api/Categorie/all");
  }

  delete(id:number){
    return  this.http.delete<any>("https://lylyqcontinental-backend.herokuapp.com/api/Categorie/delete/"+id);
  }

  add(categ:any){
    return  this.http.post<any>("https://lylyqcontinental-backend.herokuapp.com/api/Categorie/add", categ);
  }
  
  edit(app:any){ 
    return  this.http.put<any>("https://lylyqcontinental-backend.herokuapp.com/api/Categorie/edit", app);
  }

  getDetails(id:number){
    return  this.http.get("https://lylyqcontinental-backend.herokuapp.com/api/Categorie/show/"+id);
  }

}
