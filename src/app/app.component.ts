import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { DatabindingComponent } from "./components/databinding/databinding.component";
import { DirectiveComponent } from './components/directive/directive.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginAdminComponent, LoginUserComponent, DatabindingComponent, DirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tutorial';
  onClick(todo : string) {
    console.log("Onclick has been triggered!!")
    alert("Todo is Successfully deleted!!")
  }
}
