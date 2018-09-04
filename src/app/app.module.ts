import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { SeverComponent } from './sever/sever.component';
import { LoopElementComponent } from './loop-element/loop-element.component';
import { SimpleDynamicElementComponent } from './simple-dynamic-element/simple-dynamic-element.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ReceivingDataComponent } from './receiving-data/receiving-data.component';
import { DirectiveComponent } from './directive/directive.component';

@NgModule({
  declarations: [
    AppComponent,
    SeverComponent,
    LoopElementComponent,
    SimpleDynamicElementComponent,
    PropertyBindingComponent,
    ReceivingDataComponent,
    DirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
