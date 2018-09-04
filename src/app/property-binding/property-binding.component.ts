import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  disabledButtom: boolean = true;

  enableButton = () => {
    this.disabledButtom = false;
  }

  disableButton () {
    this.disabledButtom = true;
  }
  
  buttonColor2 () {
    return this.disabledButtom === true ? 'btn btn-secondary' : 'btn btn-primary'
  }
}
