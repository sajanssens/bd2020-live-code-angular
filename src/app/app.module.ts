import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent], // componenten van mijzelf 
  imports: [BrowserModule, FormsModule], // componenten van anderen die ik nodig heb
  exports: [], // openstellen voor anderen
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
