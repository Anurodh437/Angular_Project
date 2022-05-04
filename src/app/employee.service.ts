import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}
  getEmployees() {
    return [
      { id: 1, name: 'Anurodh', age: 21 },
      { id: 2, name: 'Amit', age: 19 },
      { id: 3, name: 'Ashutosh', age: 17 },
      { id: 4, name: 'Harsh', age: 24 }
    ];
  }
}
