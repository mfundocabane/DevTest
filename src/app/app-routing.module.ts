import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { CreateStudentComponent } from './student/create-student.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path:'list', component:StudentComponent},
  {path:'create',component:CreateStudentComponent},
  {path:'', redirectTo:'/list',pathMatch:'full'},
  {path:'pagenotfound', component:PagenotfoundComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
