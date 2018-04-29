import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-teacher-info',
  templateUrl: './teacher-info.component.html',
  styleUrls: ['./teacher-info.component.css']
})
export class TeacherInfoComponent implements OnInit {
  teachers: string[];
  constructor(private http:HttpClient) { 
    this.http.get('http://www.filltext.com/?rows=20&fname={firstName}&lname={lastName}&id={numberRange|1,10}').subscribe(data=>{
      console.log(data);
      this.teachers = data as string[];
    },(err: HttpErrorResponse)=>{
      console.log(err.message);
    })
  }

  ngOnInit() {
  }

}
