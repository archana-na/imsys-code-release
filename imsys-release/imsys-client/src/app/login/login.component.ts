import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../util.service';
import { FormGroup, Validators, FormBuilder, NgForm } from '../../../node_modules/@angular/forms';
import { RestdataService } from '../restdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string
  password : string
  LoginForm: FormGroup;
  loginData: { userid: string, password: string } = { userid: '', password: '' }
  @Output() myEvent = new EventEmitter();
  constructor(private router: Router, private util: UtilService, private fb: FormBuilder, private service : RestdataService) { }

  ngOnInit() {
    this.LoginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
  });
  }

  login(form:NgForm){
    //console.log(form);  

    this.service.login(this.loginData).subscribe(response =>{
      console.log(response);  
      if(response.returnCode == "0000"){
        let data = response.data[0]
        //this.util.successAlert(response.returMsg)
        localStorage.setItem('roleCode', data.roleCode)
        localStorage.setItem('isLoggedin', 'true')
        localStorage.setItem('userid', data.userid)
        //SidemenuNavComponent
        //this.router.navigate(['/**']);
         // this.onFilter.emit('Register click');

        this.util.filter('login success');
        if(data.roleCode == 'role1'){
          this.router.navigate(['/createjob']);
        }else{
          this.router.navigate(['/applyjob']);
        }
        
      }else{
        this.util.failureAlert(response.returMsg)
      }
  });

    
  }
  register(){
    this.router.navigate(['/register']);
  }
}
