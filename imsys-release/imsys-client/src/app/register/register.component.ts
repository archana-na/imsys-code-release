import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../util.service';
import { FormGroup, Validators, FormBuilder, NgForm, FormControl } from '../../../node_modules/@angular/forms';
import { RestdataService } from '../restdata.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username : string
  password : string
  RegForm: FormGroup;
  regData: { firstName:string, contactNo: Number,userid: string, password: string, roleCode: string  } = {firstName:'', contactNo: null, userid: '', password: '', roleCode: '' }
  roleList = []
  @Output() myEvent = new EventEmitter();
  constructor(private router: Router, private util: UtilService, private fb: FormBuilder, private service : RestdataService) { }

  ngOnInit() {

    this.service.getListValueByType('role').subscribe((response)=>{
      console.log("response "+JSON.stringify(response))
      this.roleList = [];
      this.roleList = response.data;
    })

    let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
		let PASSWORDPATTERN = /^[a-z0-9!#$%&_-]*$/i; //"^[a-z0-9_-]{8,15}$"; ((?=.*\\d)(?=.*[a-zA-Z])(?=.*[!#$@%&_-]).{8,16})
		let NAMEPATTERN = '[a-zA-Z ]*';
		let MOBILEPATTERN = "^((\\+91-?)|0)?[0-9]{10}$";
    this.RegForm = this.fb.group({
      firstnameControl: new FormControl('', Validators.compose([Validators.required, Validators.pattern(NAMEPATTERN), Validators.minLength(3)])),
      phoneNoControl: new FormControl('', Validators.compose([Validators.required, Validators.pattern(MOBILEPATTERN),Validators.minLength(10), Validators.maxLength(10)])),
      emailidControl: new FormControl('',Validators.compose([Validators.required, Validators.email, Validators.pattern(EMAILPATTERN)])),
      passwordControl: new FormControl('', Validators.compose([Validators.required,  Validators.minLength(5),  Validators.pattern(PASSWORDPATTERN)])),
      roleControl : new FormControl('role2',  Validators.compose([Validators.required]))
  });
  }

  register(form:NgForm){
    //console.log(form);  
    
    this.regData.roleCode = this.RegForm.get('roleControl').value;
    //console.log(JSON.stringify(this.regData))
    this.service.register(this.regData).subscribe(response =>{
        if(response.returnCode == "0000"){

          this.util.successAlert(response.returMsg)
          this.router.navigate(['/login']);
        }else{
          this.util.failureAlert(response.returMsg)
        }
    });
    
  }

  login(){
    this.router.navigate(['/login']);
  }
}
