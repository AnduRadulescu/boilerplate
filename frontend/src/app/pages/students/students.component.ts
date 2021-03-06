import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

    notFound: boolean = false;

    constructor(private router: Router, private http: HttpClient) {
    }

    ngOnInit() {
        if (localStorage.getItem('token')) {
            this.router.navigate(['student-info']);
        }
    }

    loginUser(e) {
        e.preventDefault();
        console.log(e);
        const username = e.target.elements[0].value;
        const password = e.target.elements[1].value;

        this.post(username, password)
            .subscribe((receivedStudent) => {
                    if (!receivedStudent) {
                        console.log('unauthorized');
                        this.notFound = true;
                    } else {
                        console.log(receivedStudent);
                        localStorage.setItem('token', receivedStudent['token']);
                        this.notFound = false;
                        // this.user.setUserLoggedIn();
                        this.router.navigate(['student-info']);
                    }
                },
                err => console.log(err));
    }

    post(username, password) {
        const student = {username, password};
        return this.http.post('http://localhost:8000/api/student/login', student);
    }

    back() {
        this.router.navigate(['']);
    }
}
