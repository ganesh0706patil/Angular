import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive',
  imports: [CommonModule, FormsModule],
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  idDivVisible : boolean = false;
  isToggle: boolean = true;
  num1: string = '';
  num2: string = '';
  isActive : boolean = false;
  selectedState: string='';


  hideDiv() {
    this.idDivVisible = false;
  }

  showDiv() {
    this.idDivVisible = true;
  }

  toggleDiv() {
    this.isToggle = !this.isToggle;
    // if(this.isToggle == false) {
    //   this.isToggle = true;
    // }
    // else{
    //   this.isToggle = false;
    // }
  }

}
 