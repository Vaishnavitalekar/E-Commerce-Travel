import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,  CanActivate,  CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookGuard implements CanActivate {
  constructor(private route:Router ){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let user = localStorage.getItem('userlogin')
    if(user =='true'){
      console.log('true guard')
      return true
    }else{
        this.route.navigate(['/login'])
        console.log('false guard')
      return false
    }
  }
  
  
  
}
