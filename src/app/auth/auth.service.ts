import { Injectable } from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';
import { HttpRequest, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from '../../models/login';
import { Observable } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn:boolean = false;
  full_name:string;
  constructor(private router:Router,public http:HttpClient) {debugger; }
  public getToken(): string {
    return localStorage.getItem('token');
  }
  public isAuthenticated(): boolean {
    const token = this.getToken();
    return tokenNotExpired(null, token);
    
  }
  cachedRequests: Array<HttpRequest<any>> = [];
public collectFailedRequest(request): void {
    this.cachedRequests.push(request);
  }
public retryFailedRequests(): void {
    this.router.navigate(['/']);
  } 
  isAuth(){
      return this.loggedIn;
  }
 

login(model:Login):Observable<any>  {
  return  this.http.post('http://server.simplestate.me/api/user/auth/login',model);
}
}