import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  imports: [],
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  name: string = "Ganesh";
  RollNo: number = 372043;
  isIndian: boolean = true;
  currentDate: Date = new Date();
  type: string = "text";
  textis: string = "Enter Honey";

  constructor() {
    
  }
  showhere(input: string) {
    alert(input);
  }
}
