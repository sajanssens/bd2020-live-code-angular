import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { HomeComponent } from './pages/home/home.component';

let routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'datepicker', component: DatePickerComponent },
  { path: 'formsdemo', component: TemplateDrivenFormComponent }
];

@NgModule({
  declarations: [ // componenten van mijzelf 
    AppComponent, TemplateDrivenFormComponent, DatePickerComponent, HomeComponent
  ], 
  imports: [ // componenten van anderen die ik nodig heb
    BrowserModule, FormsModule, RouterModule.forRoot(routes),
  ], 
  exports: [ // openstellen voor anderen
    
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
