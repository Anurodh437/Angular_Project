import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestComponent,
    routingComponents,
    FormsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
