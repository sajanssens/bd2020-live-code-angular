import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactRowComponent } from './components/contact-row/contact-row.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { FormsDemoComponent } from './components/forms-demo/forms-demo.component';
import { ModelDrivenFormComponent } from './components/forms-demo/model-driven-form/model-driven-form.component';
import { TemplateDrivenFormComponent } from './components/forms-demo/template-driven-form/template-driven-form.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { HomeComponent } from './pages/home/home';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'datepicker', component: DatePickerComponent },
  { path: 'formsdemo', component: FormsDemoComponent }
];

@NgModule({
  declarations: [ // componenten van mijzelf
    AppComponent,
    DatePickerComponent, ContactFormComponent, ContactListComponent, ContactRowComponent,
    FormsDemoComponent, TemplateDrivenFormComponent, ModelDrivenFormComponent,
    HelloWorldComponent,
    HomeComponent,
  ],
  imports: [ // componenten van anderen die ik nodig heb
    BrowserModule, FormsModule, RouterModule.forRoot(routes), ReactiveFormsModule, HttpClientModule
  ],
  exports: [ // openstellen voor anderen

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
