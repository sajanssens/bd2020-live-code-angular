import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {Route, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {ContactFormComponent} from './components/contact-form/contact-form.component';
import {ContactListComponent} from './components/contact-list/contact-list.component';
import {ContactRowComponent} from './components/contact-row/contact-row.component';
import {DatePickerComponent} from './components/date-picker/date-picker.component';
import {FormsDemoComponent} from './components/forms-demo/forms-demo.component';
import {ModelDrivenFormComponent} from './components/forms-demo/model-driven-form/model-driven-form.component';
import {TemplateDrivenFormComponent} from './components/forms-demo/template-driven-form/template-driven-form.component';
import {HelloWorldComponent} from './components/hello-world/hello-world.component';
import {HomeComponent} from './pages/home/home';
import {registerLocaleData} from '@angular/common';
import localeNL from '@angular/common/locales/nl';
import {SearchContactComponent} from './components/search-contact/search-contact.component';
import {LoginComponent} from './pages/login/login.component';
import {AuthGuard} from './util/auth.guard';
import {JwtInterceptor} from './util/jwt.interceptor';
import {LogoutComponent} from './pages/login/logout.component';

registerLocaleData(localeNL);

const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'datepicker', component: DatePickerComponent, canActivate: [AuthGuard]},
  {path: 'formsdemo', component: FormsDemoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
];

@NgModule({
  declarations: [ // componenten van mijzelf
    AppComponent,
    DatePickerComponent, ContactFormComponent, ContactListComponent, ContactRowComponent,
    FormsDemoComponent, TemplateDrivenFormComponent, ModelDrivenFormComponent,
    LoginComponent, LogoutComponent,
    HelloWorldComponent,
    HomeComponent,
    SearchContactComponent,
  ],
  imports: [ // componenten van anderen die ik nodig heb
    BrowserModule, FormsModule, RouterModule.forRoot(routes), ReactiveFormsModule, HttpClientModule
  ],
  exports: [ // openstellen voor anderen

  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'nl-NL'},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
