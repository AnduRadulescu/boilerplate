import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {StudentsComponent} from './students/students.component';
import {TeachersComponent} from './teachers/teachers.component';
import {StudentInfoComponent} from './student-info/student-info.component';
import {TeacherInfoComponent} from './teacher-info/teacher-info.component';
// import {AuthGuard} from '../auth.guard';


const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'students', component: StudentsComponent
    },
    {
        path: 'teachers', component: TeachersComponent
    },
    {
        path: 'student-info', component: StudentInfoComponent
    },
    {
        path: 'teacher-info', component: TeacherInfoComponent
    }

];

@NgModule({
    imports: [//RouterModule.forChild(routes),
        RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {
}
