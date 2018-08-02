import { Component, OnInit, ViewChild, Inject, ElementRef } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '../../../node_modules/@angular/material';
import { UtilService } from '../util.service';
import { RestdataService } from '../restdata.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-applyjob',
  templateUrl: './applyjob.component.html',
  styleUrls: ['./applyjob.component.css']
})
export class ApplyjobComponent implements OnInit {
  arr: any = []//[{ jobName: '12', jobDesc: '22'}, { jobName: '13', jobDesc: '23' }]
  dataSource = new MatTableDataSource(this.arr);//new CreatejobSource(this.restservice);
  displayedColumns = ['apply', 'jobName', 'jobDesc', 'skillName', 'qualificationName'];
  @ViewChild(MatSort) sort: MatSort;

  fileNameDialogRef: MatDialogRef<ApplicationFormCompnent>;

  constructor(private service: RestdataService, private router: Router,
    private util: UtilService, private dialog: MatDialog) { }

  ngOnInit() {
    this.init()
    this.dataSource.sort = this.sort;
  }

  init() {
    //this.arr = [{ jobName: '12', jobDesc: '22', count: '78' }, { jobName: '13', jobDesc: '23', count: '21' }]
    this.service.getAllJobList().subscribe((response) => {
      let array: Array<any> = response.data

      this.arr = array
      this.dataSource = new MatTableDataSource(this.arr);

    })

  }

  highlight(row) {
    console.log(row)
    console.log(row.id)
    this.fileNameDialogRef = this.dialog.open(ApplicationFormCompnent, {
      hasBackdrop: true,
      data: {
        appData: row
      }
    });
  }
}

@Component({
  template: `
    <h1 mat-dialog-title>Submit Profile</h1>
   <!-- <mat-dialog-content>
      Content goes here
    </mat-dialog-content> -->
    

    <form [formGroup]="applicationform" (ngSubmit)="submit(applicationform)">
    <mat-dialog-actions>
      <button mat-button color="warn" (click)="cancel()">Cancel</button>
      <button mat-button  color="primary" [disabled]="!applicationform.valid">Add</button>
      
    </mat-dialog-actions>
    <div class="example-container">

        <mat-form-field class="example-full-width">
            <input matInput formControlName="emailidControl" placeholder="Email" [(ngModel)]="applicationData.userid" type="text">
        </mat-form-field>
        <mat-error>

            <div *ngIf="!applicationform.get('emailidControl').valid && applicationform.get('emailidControl').touched">
            Please enter Valid Email ID
            </div>

        </mat-error>

        <mat-form-field class="example-full-width">
            <input matInput formControlName="phoneNoControl" placeholder="Phone No" [(ngModel)]="applicationData.contactNo" type="number">
        </mat-form-field>
        <mat-error>
            <div *ngIf="!applicationform.get('phoneNoControl').valid && applicationform.get('phoneNoControl').touched">
                <span *ngIf="applicationform.get('phoneNoControl').errors.required">
                    Please enter Phone No
                </span>
               

            </div>

        </mat-error>

        <mat-form-field class="example-full-width">
            <input matInput formControlName="firstnameControl" placeholder="Name" [(ngModel)]="applicationData.firstName" type="text">
        </mat-form-field>
        <mat-error>
            <div *ngIf="!applicationform.get('firstnameControl').valid && applicationform.get('firstnameControl').touched">
                <span *ngIf="applicationform.get('firstnameControl').errors.required">
                    Please enter Name
                </span>
               
            </div>
        </mat-error>

        <mat-form-field class="example-full-width">
            <input matInput formControlName="ageControl" placeholder="Age" [(ngModel)]="applicationData.age" type="number">
        </mat-form-field>
        <mat-error>
            <div *ngIf="!applicationform.get('ageControl').valid && applicationform.get('ageControl').touched">
                <span *ngIf="applicationform.get('ageControl').errors.required">
                    Please enter Age
                </span>
        </div>

        </mat-error>

        <mat-radio-group formControlName="qualificationControl">
        <label>Select Qualification</label>
        <mat-radio-button *ngFor="let q of qualificationList" value="{{q.listCode}}" (change)="selectedQualification(q)">{{q.listValue}}</mat-radio-button>
    </mat-radio-group>
    <mat-error>
        <span *ngIf="!applicationform.get('qualificationControl').valid && applicationform.get('qualificationControl').touched">Please select any Qualification</span>
    </mat-error>

        <mat-form-field class="example-full-width">
            <input matInput formControlName="experienceControl" placeholder="Experience" [(ngModel)]="applicationData.experience" type="text">
        </mat-form-field>
        <mat-error>
            <div *ngIf="!applicationform.get('experienceControl').valid && applicationform.get('experienceControl').touched">
                <span *ngIf="applicationform.get('experienceControl').errors.required">
                    Please enter Experience
                </span>
            </div>
        </mat-error>

        <div class="example-full-width">
          <label>Upload Resume :  </label>
          <input #myInput formControlName="fileControl" 
            type="file" id="file" (change)="incomingfile($event)" accept=".docx" >
        </div>
       

    </div>
</form>
  `
})
export class ApplicationFormCompnent {

  applicationform: FormGroup;
  applicationData : any = {}
  jobData : any = {}
  qualificationList : any;
  selectedQualificationData : any
  file: File;
  uploadData: any = [];
  @ViewChild('myInput')
  myInputVariable: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ApplicationFormCompnent>,
    @Inject(MAT_DIALOG_DATA) private data,
    private service: RestdataService,
    private util: UtilService
  ) { }

  ngOnInit() {

    this.service.getuserDataByEmail(localStorage.getItem('userid')).subscribe((response) => {
      this.applicationData = response.data[0];
    })

   
    this.service.getListValueByType('qualification').subscribe((response)=>{
     
      this.qualificationList = [];
      this.qualificationList = response.data;
    })

    console.log("this.data "+ JSON.stringify(this.data.appData))
    this.jobData = this.data.appData
   
    //let AGEPATTERN = "^[0-9]{2}$";
    this.applicationform = this.formBuilder.group({
      emailidControl: new FormControl(null, Validators.compose([Validators.required])),
      phoneNoControl: new FormControl(null, Validators.compose([Validators.required])),
      firstnameControl: new FormControl(null, Validators.compose([Validators.required])),
      ageControl: new FormControl(null, Validators.compose([Validators.required])),
      qualificationControl: new FormControl(null, Validators.compose([Validators.required])),
      experienceControl: new FormControl(null, Validators.compose([Validators.required])),
      fileControl: new FormControl(null, Validators.compose([Validators.required])),
    })
  }

  incomingfile(event) {
    this.file = event.target.files[0];
  }

  reset() {

    this.myInputVariable.nativeElement.value = "";
    this.uploadData = []
    this.file = null;
  }

  selectedQualification(q){
    //console.log("this.applicationData "+ JSON.stringify(this.applicationData))
    //alert(q.listValue)
    this.selectedQualificationData = q
  }
  submit(form) {

    if(this.file == null || this.file == undefined){
      this.util.infoAlert("Kindly attached the docx file")
    }else{
      this.applicationData.jobCode = this.jobData.jobCode
      console.log("this.applicationData "+ JSON.stringify(this.applicationData))
      console.log("qualificationControl "+ this.applicationform.get('qualificationControl').value)
      const formData: FormData = new FormData();
      
      let filepart: File = this.file;
      let fileName = this.util.generateUniqueNumber()+"-"+filepart.name;
      //formData.append('fileArray', this.filesList[i], this.filesList[i].name);
      formData.append('file', filepart, fileName);
      formData.append('userid', localStorage.getItem('userid'));
      formData.append('age', this.applicationData.age);
      formData.append('jobCode', this.jobData.jobCode);
      formData.append('experience', this.applicationData.experience);
      formData.append('qualification', this.selectedQualificationData.listCode);
      formData.append('qualificationDesc', this.selectedQualificationData.listValue);
      this.service.applyJob(formData).subscribe((response)=>{
     
       if(response && response.returnCode == '0000'){
        this.util.successAlert("Job applied successfully.")
       }else{
         this.util.failureAlert("Apply Job failed due to system error");
       }
      })
      
      this.dialogRef.close()
    }
    //this.dialogRef.close(`${form.value.filename}`);
    
  }

  cancel(){
    this.dialogRef.close()
  }
}