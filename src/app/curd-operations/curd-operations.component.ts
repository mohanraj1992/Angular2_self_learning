import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http,Response } from "@angular/http";

import { Injectable } from '@angular/core';

declare var bootbox:any;

@Component({
  selector: 'app-curd-operations',
  templateUrl: './curd-operations.component.html',
  styleUrls: ['./curd-operations.component.css']
})


export class CurdOperationsComponent implements OnInit {


  title = "Curd operations";

  public employees: any[];
  model:any={};
  model2:any={};
  msg:any="";


  public filterQuery = "";
  public rowsOnPage = 5;
  public sortBy = "email";
  public sortOrder = "asc";

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
  p: number = 1;
  constructor(private _http: Http) { }
  ngOnInit(): void {
        this._http.get("https://raw.githubusercontent.com/raagavendran/Angular2_self_learning/master/src/data.json")
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.employees = data.json();
                }, 5000);
            });
    }

  public toInt(num: string) {
        return +num;
    }

  public sortByWordLength = (a: any) => {
        return a.city.length;
    }
}
