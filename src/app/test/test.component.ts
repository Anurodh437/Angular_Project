import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  public name = 'Anurodh!';
  public employees:any = [];
  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
  }

  greetUser = () => {
    return "Hello " + this.name;
  }
  siteUrl = window.location.href;
  myId = "testId";
  isDisabled = false;
  styleClass = "text-styling";
  ora = "text-something"
  hasError = false;
  public isSpecial = true;
  messageClasses = {
    "text-styling":!this.hasError,
    "text-something": this.isSpecial
  }
  highlightColor = "orangered";

  //     event Binding
  onClick(event:any){
    console.log(event);
    this.greeting = event.type;
  }
  public greeting = "";
      // template reference variable
  logMessage(value:any){
    console.log(value);
  }

  public name1 = ""
  //   Structural Directives
  displayName = true;

  // ng switch
  color = 'green';
  // ng for directive
  colors = ["red","green","blue","yellow"];
  // parent and child interaction

  @Input() public parentData:any;
  //can be also written as
  // @Input('parentData') public some: any;

  @Output() public childEvent:any = new EventEmitter();
  fireEvent(){
    this.childEvent.emit("hey Coding geeks");
  }

}
