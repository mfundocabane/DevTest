import { Injectable } from '@angular/core';
import {Http ,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Observable'
import { environment } from '../../environments/environment';
import { Department } from '../models/department.model';

const httpOptions = {
  headers: new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS','Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'})
}

@Injectable()
export class DepartmentService {

  student:Department;
  constructor( public _http:Http) { }

  getDepartment():Observable<Department>{   
    const url = environment.baseUrl+'Department/GetAllDepartments';
    return this._http.get(url,httpOptions)
    .map((response: Response)=><Department>response.json())
   }


}
