import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-loop-element',
  templateUrl: './loop-element.component.html',
  styleUrls: ['./loop-element.component.css']
})
export class LoopElementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() passedItem: string;

  @Output() getResponseFromChild = new EventEmitter<string>(); 

  passNameToDelete() {
    this.getResponseFromChild.emit(this.passedItem)
  }

}
