import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{Department} from '../models/department.model';
import{Student} from '../models/student.model';
import { DepartmentService } from '../department/department.service';
import { StudentService } from '../student/student.service'

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
 departments
 student
  constructor(public _dep:DepartmentService, public _student:StudentService) { }

  ngOnInit() {
    
    this._dep.getDepartment().subscribe((posts)=>
    this.departments = posts)
  }

  saveStudent(stdForm:NgForm):void{
    this._student.saveStudentDetails(stdForm.value).subscribe(data => {if(data)
    {
      console.log('Student information saved');
    }else
    {
      console.log('Student information not saved');
    }  
  },
err=> {
  console.log('error '+ err);
} );

    // console.log(stdForm.value)
  }
}
