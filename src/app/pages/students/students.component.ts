import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private router: Router , private user: UserService) { }

  ngOnInit() {
    console.log("is user logged in ?",this.user.getUserLoggedIn);
  }

  loginUser(e){
    e.preventDefault();    
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
   
     if(username == 'admin' && password == 'admin'){
      this.user.setUserLoggedIn();
      this.router.navigate(['student-info']);
     }
  }
}
