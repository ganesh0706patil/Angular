import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  // variable decleration
  name: string = "Ganesh";
  RollNo: number = 372043;
  isIndian: boolean = true;
  currentDate: Date = new Date();
  type: string = "text";
  textis: string = "Enter Honey";
  userInput: string = "Hey Ganesh";

  constructor() {}

  // function creation
  showhere(input: string) {
    alert(input);
  }

  changeText(input: string) {
    this.userInput = input;
  }
}
