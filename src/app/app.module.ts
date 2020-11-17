import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { FormsDemoComponent } from './components/forms-demo/forms-demo.component';
import { ModelDrivenFormComponent } from './components/forms-demo/model-driven-form/model-driven-form.component';
import { TemplateDrivenFormComponent } from './components/forms-demo/template-driven-form/template-driven-form.component';
import { HomeComponent } from './pages/home/home';

let routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'datepicker', component: DatePickerComponent },
  { path: 'formsdemo', component: FormsDemoComponent }
];

@NgModule({
  declarations: [ // componenten van mijzelf 
    AppComponent, TemplateDrivenFormComponent, DatePickerComponent, HomeComponent, ModelDrivenFormComponent, FormsDemoComponent
  ], 
  imports: [ // componenten van anderen die ik nodig heb
    BrowserModule, FormsModule, RouterModule.forRoot(routes), ReactiveFormsModule
  ], 
  exports: [ // openstellen voor anderen
    
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
