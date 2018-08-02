import { Injectable } from '@angular/core';
import { Subject } from '../../node_modules/rxjs';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  private _listners = new Subject<any>();

    listen(): Observable<any> {
       return this._listners.asObservable();
    }

    filter(filterBy: string) {
       this._listners.next(filterBy);
    }

    convertDateFromString(string){
      return moment(string).format('YYYY-MM-DD')
    }

    getServerDateFormat(date){
      return moment(date).format('YYYY-MM-DD')
    }
    generateUniqueNumber() {
      let min = 0;
      let max = 10000000000;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    infoAlert(msg){
      alert(msg)
    }
    successAlert(msg){
      alert(msg)
    }

    failureAlert(msg){
      if(msg == null || msg == ''){
        msg = "System error. Please try again"
      }
      alert(msg)
    }
    log(message: string) {

      //////console.log("success message log -->" + message)
    }
}
