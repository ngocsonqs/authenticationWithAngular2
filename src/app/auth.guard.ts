import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Auth } from './services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private auth : Auth, private router : Router) {

  }

  canActivate( next : ActivatedRouteSnapshot, state : RouterStateSnapshot ) {
    if ( this.auth.authenticated() ) {
      // nếu đường dẫn này được phép thông qua
      console.log("AUTH GUARD PASSED");
      return true;
    } else {
      // nếu đường dẫn này không được phép thì sẽ bị chuyển về đường dẫn root
      console.log("BLOCKED BY AUTH GUARD");
      this.router.navigate(['/']);
      return false;
    }
  }
}
