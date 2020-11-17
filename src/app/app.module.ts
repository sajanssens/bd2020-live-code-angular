import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

let routes: Route[] = [
  { path: 'labs', component: AppComponent },
  { path: 'formsdemo', component: TemplateDrivenFormComponent }
];

@NgModule({
  declarations: [ // componenten van mijzelf 
    AppComponent, TemplateDrivenFormComponent, MainPageComponent
  ], 
  imports: [ // componenten van anderen die ik nodig heb
    BrowserModule, FormsModule, RouterModule.forRoot(routes),
  ], 
  exports: [ // openstellen voor anderen
    
  ], 
  providers: [],
  bootstrap: [MainPageComponent]
})
export class AppModule { }
