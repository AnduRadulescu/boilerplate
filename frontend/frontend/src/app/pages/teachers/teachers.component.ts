import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginTeacher(e){
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    // console.log(username, password);
    // return false;

     if(username == 'admin' && password == 'admin'){
      this.router.navigate(['student-info']);
     }
  }
}
