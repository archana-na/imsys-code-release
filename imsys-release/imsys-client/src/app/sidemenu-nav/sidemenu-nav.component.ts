import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-sidemenu-nav',
  templateUrl: './sidemenu-nav.component.html',
  styleUrls: ['./sidemenu-nav.component.css']
})
export class SidemenuNavComponent {

  login : boolean = false
  firstName  = ""
  role = 'role2';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver, private router : Router,
    private util: UtilService) {

      this.util.listen().subscribe((m:any) => {
        console.log(m);
        this.onFilterClick(m);
    })

    this.onFilterClick(null)
    // if (localStorage.getItem('isLoggedin')) {
    //   this.login = true 
    // }else{
    //   this.login = false
    // }
  }

  logout(){
    localStorage.clear();
    this.login = false
    this.router.navigate(['/login']);
  }

  onFilterClick(event) {
    if (localStorage.getItem('isLoggedin')) {
      this.login = true 
    }else{
      this.login = false
    } 
    
    if(localStorage.getItem('roleCode')){
      this.role = localStorage.getItem('roleCode')
    }

  }
     
  }
