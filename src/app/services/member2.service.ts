import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Member2Service {

  constructor(private http: HttpClient) { }

  add(app:any){
    return  this.http.post<any>("https://lylyqcontinental-backend.herokuapp.com/api/Member2/add", app);
  }

    
  getALL(){
    return  this.http.get("https://lylyqcontinental-backend.herokuapp.com/api/Member2/all");
  }

  
  
  delete(id:number){
    return  this.http.delete<any>("https://lylyqcontinental-backend.herokuapp.com/api/Member2/delete/"+id);
  }
  
  
  edit(app:any){ 
    return  this.http.put<any>("https://lylyqcontinental-backend.herokuapp.com/api/Member2/edit", app);
  }

 
  
  getDetails(id:number){
    return  this.http.get("https://lylyqcontinental-backend.herokuapp.com/api/Member2/show/"+id);
  }
  
  checkpasswordd(data:any){
    return this.http.post<any>("https://lylyqcontinental-backend.herokuapp.com/api/Member2/checkpassword", data);
  }

}
