import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DataSource } from '../../../node_modules/@angular/cdk/table';
import { RestdataService } from '../restdata.service';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatSort } from '../../../node_modules/@angular/material';
import { Router } from '@angular/router';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-appliedcandiadates',
  templateUrl: './appliedcandiadates.component.html',
  styleUrls: ['./appliedcandiadates.component.css']
})
export class AppliedCandidateViewComponent implements OnInit {

  term: any;
  jobList: Array<any>
  arr: any = []
  dataSource = new MatTableDataSource(this.arr);//new CreatejobSource(this.restservice);
  displayedColumns = ['jobCode', 'jobDesc', 'applyDate','appliedBy'];//, 'company'

  @ViewChild(MatSort) sort: MatSort;
  //@Input()selectedIndex: number | 0;
  selectedTab = 0;
  selectedRowIndex: number = -1;
  selectedRow : any;
  CreateTabIsDisabled : boolean = true;
  constructor(private service: RestdataService, private router: Router,
    private util: UtilService) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    
    if(localStorage.getItem('roleCode') == "role2"){
      this.service.getAppliedJobsById(localStorage.getItem('userid')).subscribe((response) => {
        let array: Array<any> = response.data
  
        this.arr = array
        this.dataSource = new MatTableDataSource(this.arr);
  
      })
    }else{
      this.service.getAppliedJobsAll().subscribe((response) => {
        let array: Array<any> = response.data
  
        this.arr = array
        this.dataSource = new MatTableDataSource(this.arr);
  
      })
    }
   
  }

  highlight(row) {
    this.selectedRow  = row
    console.log(JSON.stringify(this.selectedRow))
    this.selectedRowIndex = row.name;
  }
 
  addNew(){
    this.CreateTabIsDisabled = true;
    this.selectedTab = 1
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