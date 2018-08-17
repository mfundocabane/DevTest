import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { CreateStudentComponent } from './student/create-student.component';

import { StudentService } from './student/student.service';
import { DepartmentService } from './department/department.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    CreateStudentComponent,
    PagenotfoundComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [StudentService,DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
