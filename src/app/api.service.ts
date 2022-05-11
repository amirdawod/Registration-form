import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './Models/userModel';

@Injectable({
  providedIn : 'root'
})
export class ApiService {
  baseUrl : string ='https://tgh-newhire-api.azurewebsites.net/api/User';

  constructor(private http : HttpClient) { }
   
  postUser(user:User) : Observable<any>{
    return this.http.post<any>(`${this.baseUrl}`,user);
  }
  getUsers(accessCode:string) : Observable<any>{
    return this.http.get<User[]>(`${this.baseUrl}/${accessCode}`);
  }
  deleteUser(id:number,accessCode:string) : Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}/${accessCode}`);
  }
}