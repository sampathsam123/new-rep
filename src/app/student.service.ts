import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  
  constructor() { }
  getStudents(){
  return  [
      {'id':1,"name":'sam','age':20},
      {'id':2,"name":'harry','age':21},
      {'id':3,'name':"pannu",'age':22},
      {'id':4,'name':'sharan','age':23}
    ]
  }

}
