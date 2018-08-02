import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private router: Router) { }

  canActivate() {
   //  alert(localStorage.getItem('isLoggedin'));
    if (localStorage.getItem('isLoggedin')) {
        if (localStorage.getItem('roleCode') == 'role1') {
            this.router.navigate(['/createjob']);
        }else if (localStorage.getItem('roleCode') == 'role2'){
            this.router.navigate(['/applyjob']);
        }else{
            this.router.navigate(['/dashboard']); //dashboard
        }
        
       
        return true;
    }

    this.router.navigate(['/login']);
    return false;
}
}
