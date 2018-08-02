import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DataSource } from '../../../node_modules/@angular/cdk/table';
import { RestdataService } from '../restdata.service';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatSort } from '../../../node_modules/@angular/material';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm, FormArray } from '../../../node_modules/@angular/forms';
import * as _ from 'lodash';
import { UtilService } from '../util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createjob',
  templateUrl: './createjob.component.html',
  styleUrls: ['./createjob.component.css']
})
export class CreatejobComponent implements OnInit {

  term: any;
  jobList: Array<any>
  arr: any = []//[{ jobName: '12', jobDesc: '22'}, { jobName: '13', jobDesc: '23' }]
  dataSource = new MatTableDataSource(this.arr);//new CreatejobSource(this.restservice);
  displayedColumns = ['jobName', 'jobDesc', 'skillName', 'qualificationName'];//, 'company'

  @ViewChild(MatSort) sort: MatSort;
  //@Input()selectedIndex: number | 0;
  selectedTab = 0;
  selectedRowIndex: number = -1;
  selectedRow: any;
  CreateTabIsDisabled: boolean = true;
  skillsetList: any = [];
  selectedskillsetList: any = []
  qualificationList: any = []
  selectedqualificationList: any = []
  jobForm: FormGroup;
  jobData: { jobName: string, jobDesc: string, qualification: Array<any>, skillset: Array<any> } = { jobName: '', jobDesc: null, qualification: null, skillset: null }

  constructor(private restservice: RestdataService, private fb: FormBuilder,
    private service: RestdataService, private router: Router,
    private util: UtilService) { }

  ngOnInit() {
    this.init();
    this.dataSource.sort = this.sort;
    this.jobForm = this.fb.group({
      jobNameControl: new FormControl('', [Validators.required]),
      jobDescControl: new FormControl('', [Validators.required]),
      qualificationControl: new FormControl(null, []),
      skillsetControl: new FormControl(null, []),

    });


  }

  init() {
    //this.arr = [{ jobName: '12', jobDesc: '22', count: '78' }, { jobName: '13', jobDesc: '23', count: '21' }]
    this.service.getAllJobList().subscribe((response) => {
      let array: Array<any> = response.data
      console.log("------" + JSON.stringify(response.data))
      this.arr = array
      this.dataSource = new MatTableDataSource(this.arr);

    })
    this.service.getListAll().subscribe((response) => {

      let arr: Array<any> = response.data
      //console.log("arr "+JSON.stringify(arr))

      this.skillsetList = _.filter(arr, function (n) { return n.listType == 'skillset'; });
      this.qualificationList = _.filter(arr, function (n) { return n.listType == 'qualification'; });

      //console.log("skillsetList "+JSON.stringify(this.skillsetList))
    })

  }
  onQualificationChange(event) {

    if (event.checked) {
      let obj = _.find(this.qualificationList, { 'listCode': event.source.value })
      this.selectedqualificationList.push(obj)
    } else {
      _.remove(this.selectedqualificationList, { 'listCode': event.source.value })
    }

    //console.log(JSON.stringify(this.selectedqualificationList))
  }
  onSkillsetChange(event) {

    if (event.checked) {
      let obj = _.find(this.skillsetList, { 'listCode': event.source.value })
      this.selectedskillsetList.push(obj)

    } else {
      _.remove(this.selectedskillsetList, { 'listCode': event.source.value })

    }

    //console.log(JSON.stringify(this.selectedskillsetList))
  }


  highlight(row) {
    this.selectedRow = row
    this.selectedRowIndex = row.name;
  }

  addNew() {
    this.CreateTabIsDisabled = true;
    this.selectedTab = 1
  }
  save(form: NgForm) {
    //console.log(form);
    if (this.selectedqualificationList.length <= 0) {
      this.util.infoAlert("Please select the qualification")
    } else if (this.selectedskillsetList.length <= 0) {
      this.util.infoAlert("Please select the skill set")
    } else {
      var jobSkillSetDataList = []
      var jobMasterQualificationData = []

      var masterData: any = {}
      masterData.jobCode = this.jobData.jobName;
      masterData.jobName = this.jobData.jobName;
      masterData.jobDesc = this.jobData.jobDesc;
      masterData.assignedBy = localStorage.getItem('userid');
      masterData.assignedDate = this.util.getServerDateFormat(new Date())
      var skillName = ''
      var qualificationName = ''

      for (let i = 0; i < this.selectedskillsetList.length; i++) {
        let obj: any = {};
        obj.jobCode = this.jobData.jobName
        obj.listCode = this.selectedskillsetList[i].listCode
        if(i==0){
          skillName = this.selectedskillsetList[i].listValue;
        }else{
          skillName = skillName+ ","+this.selectedskillsetList[i].listValue
        }
        jobSkillSetDataList.push(obj)
      }
      for (let i = 0; i < this.selectedqualificationList.length; i++) {
        let obj: any = {};
        obj.jobCode = this.jobData.jobName
        obj.listCode = this.selectedqualificationList[i].listCode
        if(i==0){
          qualificationName = this.selectedqualificationList[i].listValue;
        }else{
          qualificationName = qualificationName+ ", "+this.selectedqualificationList[i].listValue
        }
        jobMasterQualificationData.push(obj)
      }

      masterData.jobQulificationList = jobMasterQualificationData
      masterData.jobSkillList = jobSkillSetDataList

      masterData.skillName = skillName;
      masterData.qualificationName = qualificationName;

      console.log(JSON.stringify(masterData))

      this.service.createNewJob(masterData).subscribe(response => {
        console.log(" response " + JSON.stringify(response))
        if (response && response.returnCode == "0000") {

          this.util.successAlert(response.returMsg)
          this.selectedTab = 0
          this.clear()
        } else {
          this.util.failureAlert(response.returMsg)
        }
      });
    }

  }
  clear() {
    this.jobData.jobName = ''
    this.jobData.jobDesc = ''
    this.skillsetList = [];
    this.qualificationList = [];
    this.selectedskillsetList = []
    this.selectedqualificationList = [];
    this.init()
  }
}


// export class CreatejobSource extends DataSource<any> {
//   constructor(private restservice: RestdataService) {
//     super();
//   }

//   /** Connect function called by the table to retrieve one stream containing the data to render. */
//   connect(): Observable<any> {
//     console.log(this.restservice.getUser())
//     let arr : any = [{name:'12',email:'22',phone:'78'}, {name:'13',email:'22',phone:'78'}]
//     return arr;
//   }

//   disconnect() {}
// }