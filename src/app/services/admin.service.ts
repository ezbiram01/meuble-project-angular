import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }


    
  getALL(){
    return  this.http.get("https://lylyqcontinental-backend.herokuapp.com/api/Admin/all");
  }

  delete(id:number){
    return  this.http.delete<any>("https://lylyqcontinental-backend.herokuapp.com/api/Admin/delete/"+id);
  }
  
  add(admin:any){
    return  this.http.post<any>("https://lylyqcontinental-backend.herokuapp.com/api/Admin/add/", admin);
  }
  
  
  edit(ad:any){ 
    return  this.http.put<any>("https://lylyqcontinental-backend.herokuapp.com/api/Admin/edit", ad);
  }
  
  getDetails(id:number){
    return  this.http.get("https://lylyqcontinental-backend.herokuapp.com/api/Admin/show/"+id);
  }

  checkpassword(data:any){
    return this.http.post<any>("https://lylyqcontinental-backend.herokuapp.com/api/Admin/checkpassword", data);
  }

}
