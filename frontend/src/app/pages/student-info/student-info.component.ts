import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
    selector: 'app-student-info',
    templateUrl: './student-info.component.html',
    styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
    subjects: string[];
    httpOptions = {
        headers: new HttpHeaders({
            'Authorization': localStorage.getItem('token')
        })
    };

    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit() {
        console.log('ceva');
        this.sync();
    }

    sync() {
        this.http.post('http://localhost:8000/api/student/sync', {}, this.httpOptions)
            .subscribe(studentInfo => {
                console.log(studentInfo.student.subjects);
                this.subjects = studentInfo.student.subjects as string[];
            }, (err: HttpErrorResponse) => {
                console.log(err.message);
            });
    }

    onLogOut() {
        localStorage.removeItem('token');
        this.router.navigate(['students']);
    }
}