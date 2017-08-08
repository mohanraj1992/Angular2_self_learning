import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

declare var bootbox:any;

@Component({
  selector: 'app-curd-operations',
  templateUrl: './curd-operations.component.html',
  styleUrls: ['./curd-operations.component.css']
})
export class CurdOperationsComponent implements OnInit {
  title = "Curd operations";
  employees = [
  {name:"raaga",position:"dev"},
  {name:"vendran",position:"associate"},
  {name:"ra",position:"programmer"}
  ];

  model:any={};
  model2:any={};
  msg:any="";


  addEmployee(){
  this.employees.push(this.model);
  this.model={};
  bootbox.alert("User Added");
  }

  deleteEmployee(i){
  this.employees.splice(i,1);
  bootbox.alert("User Deleted Successfully");
  }

  myValue;
  editEmployee(k){
  this.model2.name= this.employees[k].name;
  this.model2.position= this.employees[k].position;
  this.myValue = k;
  }


  updateEmployee(){
  let k= this.myValue;
  for(let i=0;i<this.employees.length;i++){
  if(i==k)
  {
  this.employees[i] = this.model2;
  this.model2 = {};
  bootbox.alert("User Updated Successfully");
  }
  }

  }

  clickMe(){
  this.msg="";
  }

  constructor() { }

  ngOnInit() {
  }

}
