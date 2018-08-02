import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AppSettings } from './AppSettings';
import { UtilService } from './util.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};
@Injectable({
  providedIn: 'root'
})
export class RestdataService {

  constructor(private util : UtilService, private http: HttpClient) { }

 

  register(inputData : any): Observable<any>{
    let url = AppSettings.SERVER_URL + AppSettings.REGISTER;
    let data = JSON.stringify(inputData)
    return this.http.post<any>(url, inputData, httpOptions).pipe(
      tap((userRespone: any) => this.util.log(`register response returned`)),
      catchError(this.handleError<any>('register'))
    );
  }

  login(inputData : any): Observable<any>{
    let url = AppSettings.SERVER_URL + AppSettings.LOGIN;
    let data = JSON.stringify(inputData)
    return this.http.post<any>(url, inputData, httpOptions).pipe(
      tap((userRespone: any) => this.util.log(`login response returned`)),
      catchError(this.handleError<any>('login'))
    );
  }
  getuserDataByEmail(email): Observable<any> {
    
    let url = AppSettings.SERVER_URL + AppSettings.GET_USER_DETAIL_BY_ID + email 
 
    return this.http.get<any>(url, httpOptions).pipe(
      tap((userRespone: any) => this.util.log(`getuserDataByEmail response returned`)),
      catchError(this.handleError<any>('getuserDataByEmail'))
    );
  }


  createNewJob(inputData : any): Observable<any>{
    let url = AppSettings.SERVER_URL + AppSettings.CREATE_NEW_JOB;
    let data = JSON.stringify(inputData)
    return this.http.post<any>(url, inputData, httpOptions).pipe(
      tap((userRespone: any) => this.util.log(`register response returned`)),
      catchError(this.handleError<any>('register'))
    );
  }

  getListValueByType(type): Observable<any> {
    
    let url = AppSettings.SERVER_URL + AppSettings.LIST_GET_BY_TYPE + type 
 
    return this.http.get<any>(url, httpOptions).pipe(
      tap((userRespone: any) => this.util.log(`getListValueByType response returned`)),
      catchError(this.handleError<any>('getListValueByType'))
    );
  }

  getListAll(): Observable<any> {
    
    let url = AppSettings.SERVER_URL + AppSettings.LIST_GET_All;
 
    return this.http.get<any>(url, httpOptions).pipe(
      tap((userRespone: any) => this.util.log(`getListAll response returned`)),
      catchError(this.handleError<any>('getListAll'))
    );
  }


  getAllJobList(): Observable<any> {
    
    let url = AppSettings.SERVER_URL + AppSettings.LIST_GET_All_JOB;
 
    return this.http.get<any>(url, httpOptions).pipe(
      tap((userRespone: any) => this.util.log(`getAllJobList response returned`)),
      catchError(this.handleError<any>('getAllJobList'))
    );
  }

  applyJob(inputData : any):Observable<any>{
    let contenttype = "multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2);
    const httpOptionss = {
      headers: new HttpHeaders({'Access-Control-Allow-Origin': '*', 'Accept': 'application/json' })
    };

    let url = AppSettings.SERVER_URL + AppSettings.APPLY_JOB
    console.log("url -->" + url)
    console.log("inputData -->" + JSON.stringify(inputData));
    return this.http.post<any>(url,inputData,httpOptionss).pipe(
      tap((userRespone: any) => this.util.log(`applyJob response returned`)),
      catchError(this.handleError<any>('applyJob'))
    );
  }

  getAppliedJobsById(email): Observable<any> {
    
    let url = AppSettings.SERVER_URL + AppSettings.GET_APPLY_JOB_BY_ID + email 
 
    return this.http.get<any>(url, httpOptions).pipe(
      tap((userRespone: any) => this.util.log(`GET_APPLY_JOB response returned`)),
      catchError(this.handleError<any>('GET_APPLY_JOB'))
    );
  }

  getAppliedJobsAll(): Observable<any> {
    
    let url = AppSettings.SERVER_URL + AppSettings.GET_APPLY_JOB_ALL
 
    return this.http.get<any>(url, httpOptions).pipe(
      tap((userRespone: any) => this.util.log(`GET_APPLY_JOB_ALL response returned`)),
      catchError(this.handleError<any>('GET_APPLY_JOB_ALL'))
    );
  }

   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
     
      if (error.status == 0) {
        alert("Server is not reachable. Please contact system admin")

      } else if (error.status == 401) {
        alert("Timeout error. Please try again")
        //localStorage.clear()
        //this.router.navigate(['/login'])
      } else if (error.status == 500 || error.status == 501 || error.status == 400) {
        //this.events.publish('user:logout');
        alert("Internal Server Error. Please try again")

        //localStorage.clear()
      }


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
