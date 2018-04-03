import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  {
    path: 'pages', component: NavbarComponent, children: [
      //{ path: 'home',redirectTo: 'students', pathMatch: 'full'},
      { path: 'home', component: HomeComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'teachers', component: TeachersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
