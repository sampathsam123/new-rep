import { Component, OnInit } from '@angular/core';
// import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  stundents : any;
  // constructor(private _studentService : StudentService) { }

  ngOnInit(){
    // this.stundents=this._studentService.getStudents();
  }

}
