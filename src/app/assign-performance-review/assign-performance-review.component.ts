import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-assign-performance-review',
  templateUrl: './assign-performance-review.component.html',
  styleUrls: ['./assign-performance-review.component.css']
})
export class AssignPerformanceReviewComponent implements OnInit {
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
