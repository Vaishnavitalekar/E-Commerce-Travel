import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  constructor(private http:HttpClient) { }

  adduser(obj:any){
    return this.http.post('http://localhost:3000/registeredusers' , obj)
  }

  getuser(){
    return this.http.get('http://localhost:3000/registeredusers')
  }
}
