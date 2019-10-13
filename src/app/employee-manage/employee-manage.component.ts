import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-manage',
  templateUrl: './employee-manage.component.html',
  styleUrls: ['./employee-manage.component.css']
})
export class EmployeeManageComponent implements OnInit {
  employees: Employee[];
  addEmployee:Boolean =false;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }
  
  add(name: string,employeeCode:string): void {
    name = name.trim();
    if (!name) { return; }
    this.employeeService.addEmployee({ name } as Employee)
      .subscribe(employee => {
        this.employees.push(employee);
      });
  }

  delete(employee: Employee): void {
    this.employees = this.employees.filter(h => h !== employee);
    this.employeeService.deleteEmployee(employee).subscribe();
  }
}
