import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sever',
  templateUrl: './sever.component.html',
  styleUrls: ['./sever.component.css']
})
export class SeverComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  namingString: string = '';

  nameElement (event: any) {
    this.namingString = event.target.value;
  }

  createElement () {
    this.loopItems.push(this.namingString);
    this.namingString = '';
  }

  loopItems = []

  removeElement (nameToRemove: string) {

  }
  
}
