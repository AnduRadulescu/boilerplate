import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';


@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  

  constructor(private user:UserService) { }

  ngOnInit() {
  }

}
