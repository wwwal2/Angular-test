import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receiving-data',
  templateUrl: './receiving-data.component.html',
  styleUrls: ['./receiving-data.component.css']
})
export class ReceivingDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  receivedData: string = '';

  reverseDataBinding (event: any) {
    this.receivedData = event.target.value;
  }
  
}
