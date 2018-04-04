import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { TeacherInfoComponent } from './teacher-info/teacher-info.component';


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [HomeComponent, NavbarComponent, StudentsComponent, TeachersComponent, StudentInfoComponent, TeacherInfoComponent ]
})
export class PagesModule { }
