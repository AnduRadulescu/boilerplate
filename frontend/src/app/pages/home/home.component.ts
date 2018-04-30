import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    loginStudent(e) {
        // http.post()
        this.router.navigate(['students']);
    }

    loginTeacher(e) {
        console.log(this.router.navigate(['teachers']));
    }

}
