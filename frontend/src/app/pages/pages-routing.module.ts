import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentInfoComponent} from './student-info/student-info.component'; 
import { TeacherInfoComponent} from './teacher-info/teacher-info.component';

// const routes: Routes = [
//   {
//     path: 'pages', component: NavbarComponent, children: [
//       { path: 'home', component: HomeComponent },
//       { path: 'students', component: StudentsComponent },
//        { path: 'sutdent-pages',component: SutdentPagesComponent},
//       { path: 'teachers', component: TeachersComponent }
//     ]
//   }
// ];
const appRoutes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'students',component: StudentsComponent
  },
  {
    path:'teachers',component: TeachersComponent
  },
  {
    path:'student-info',component: StudentInfoComponent
  },
  {
    path:'teacher-info',component: TeacherInfoComponent
  }
]

@NgModule({
  imports: [//RouterModule.forChild(routes),
            RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
