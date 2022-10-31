import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Member1Service {

  constructor(private http: HttpClient) { }



  add(app:any){
    return  this.http.post<any>("https://lylyqcontinental-backend.herokuapp.com/api/Member1/add", app);
  }

    
  getALL(){
    return  this.http.get("https://lylyqcontinental-backend.herokuapp.com/api/Member1/all");
  }

  
  
  delete(id:number){
    return  this.http.delete<any>("https://lylyqcontinental-backend.herokuapp.com/api/Member1/delete/"+id);
  }
  
  
  edit(app:any){ 
    return  this.http.put<any>("https://lylyqcontinental-backend.herokuapp.com/api/Member1/edit", app);
  }

 
  
  getDetails(id:number){
    return  this.http.get("https://lylyqcontinental-backend.herokuapp.com/api/Member1/show/"+id);
  }
  
  checkpasswordd(data:any){
    return this.http.post<any>("https://lylyqcontinental-backend.herokuapp.com/api/Member1/checkpassword", data);
  }

}
