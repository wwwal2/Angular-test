import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-dynamic-element',
  templateUrl: './simple-dynamic-element.component.html',
  styleUrls: ['./simple-dynamic-element.component.css']
})
export class SimpleDynamicElementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  dynamic1: string = 'Dynamic string';
  dynamic2: number = 10;

  makeMethodDinamic1 = () =>{
    return this.dynamic1
  }

  
}
