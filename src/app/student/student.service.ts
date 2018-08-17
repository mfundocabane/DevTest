import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import {Http ,Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Observable'
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS','Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'})
}

@Injectable()
export class StudentService {
  student:Student;
  constructor( public _http:Http) { }

  getStudentDetails():Observable<Student>{   
    const url = environment.baseUrl+'Department';
    return this._http.get(url,httpOptions)
    .map((response: Response)=><Student>response.json())
   }

   getStudentByStudentNumber(studentNumber:number):Observable<Student>
   { 
    const url = `${environment.baseUrl+"/Student/"}?${"studentNumber="+studentNumber}`;
                 return this._http.get(url,httpOptions)
                            .map((response:Response)=> <Student>response.json())
   }

   saveStudentDetails(_student:Student)
   {
     //url for savestudent will be use in below url
    const url = environment.baseUrl+'Department/saveStudentDetails';
    let body = JSON.stringify(_student);
    return this._http.post(url, body, httpOptions).map((response:Response)=><Student>response.json());
   }

}
