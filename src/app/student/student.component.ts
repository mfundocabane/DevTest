import { Component, OnInit } from '@angular/core';
import{Student} from '../models/student.model';
import{StudentService} from '../student/student.service';


@Component({
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
StudentData:any;
students:Student[] = [{
  id: 1,
  name :"Nkanyiso",
  gander:'Male',
  surname:'Shangase',
  email : 'tets@fnb.oza',
  phoneNumber  :6546546546546 ,
  contactPreference: "string",
  dateOfBirth :new Date("12/09/2018"),
  department:"string",
  isActive:true,
  photoPath:"assets/Images/Males.png",
},{
  id: 2,
  name :'Nokwe',
  gander:'Female',
  surname:'Mjoka',
  email : 'hbjhj@jjj.vv',
  phoneNumber : 546464654654,
  contactPreference: "string",
  dateOfBirth :new Date("12/09/2018"),
  department:"string",
  isActive:true,
  photoPath:"assets/Images/Females.png"
},
]

  constructor( public _student:StudentService ) { }

  ngOnInit() {
     this._student.getStudentDetails().subscribe((posts)=>
    this.StudentData = posts)
  }
  
  getStudentByStudentNumber(){
    this._student.getStudentByStudentNumber(1)
    .subscribe((studentData) => {
                                  this._student.student = studentData
                                  if(this._student.student!=null){  }
                                  })
    }
}
