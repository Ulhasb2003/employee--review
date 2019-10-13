import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from './employee';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees = [
      { id: 11, name: 'Romin Irani', jobTitleName: 'Manager', employeeCode: 'E1', phoneNumber: "408-1234567", emailAddress: "romin.k.irani@gmail.com", feedback: "" },
      { id: 12, name: 'Nitest Agarwal', jobTitleName: 'BA', employeeCode: 'E23', phoneNumber: "408-1234567", emailAddress: "romin.k.irani@gmail.com", feedback: "" },
      { id: 13, name: 'Suchit Rana', jobTitleName: 'QA', employeeCode: 'E3', phoneNumber: "408-1234567", emailAddress: "romin.k.irani@gmail.com", feedback: "" },
      { id: 14, name: 'Ganpat more', jobTitleName: 'Developer', employeeCode: 'E4', phoneNumber: "408-1234567", emailAddress: "romin.k.irani@gmail.com", feedback: "" },
      { id: 15, name: 'Sambaji sawant', jobTitleName: 'Developer Lead', employeeCode: 'E5', phoneNumber: "408-1234567", emailAddress: "romin.k.irani@gmail.com", feedback: "" }
    ];

    return { employees };
  }

  
  genId<T extends Employee>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }
}
