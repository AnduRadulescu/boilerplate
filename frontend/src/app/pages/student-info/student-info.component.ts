import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
  students: string[];
  constructor(private user:UserService, private http: HttpClient) {
    this.http.get('http://www.filltext.com/?rows=7&country={country}&id={numberRange|1,10}').subscribe(data=>{
      console.log(data);
      this.students = data as string[];
    },(err: HttpErrorResponse)=> {
      console.log(err.message);
    })
   }

  ngOnInit() {
  }

}
