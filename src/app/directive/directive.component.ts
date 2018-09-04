import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  directiveOn: boolean = false;
  activateDirective () {
    switch (this.directiveOn) {
      case true:
      this.directiveOn = false;
      break;
      case false:
      this.directiveOn = true;
    }
  }

  buttonColor() {
    return this.directiveOn === true ? 'btn btn-success' : 'btn btn-danger'
  }

}
