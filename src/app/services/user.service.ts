import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  

  loginUser(data:any){
    return this.http.post<any>("https://lylyqcontinental-backend.herokuapp.com/api/User/login", data);
  }

  getPassword(data:any){
    return this.http.post<any>("https://lylyqcontinental-backend.herokuapp.com/api/User/forget", data); 
  }
  
  verifieEmailUser(data:any){
    return this.http.post<any>("https://lylyqcontinental-backend.herokuapp.com/api/User/verifie", data); 
  }

   
  changementpass(data:any){
    return this.http.post<any>("https://lylyqcontinental-backend.herokuapp.com/api/User/changementpass", data); 
  }

  


}

