import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EmployeeService } from './employee.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';

import { StudentService } from './student.service';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { SampleComponent } from './sample/sample.component';
// import { StudentListComponent } from './student-list/student-list.component';
// import { StudentDetailsComponent } from './student-details/student-details.component';
@NgModule({
  declarations: [
    TestComponent,
    EmployeeListComponent,
    StudentListComponent,
    StudentDetailsComponent,
    SampleComponent,
    
  ],
  imports:[
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [
    EmployeeService ,
    StudentService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
