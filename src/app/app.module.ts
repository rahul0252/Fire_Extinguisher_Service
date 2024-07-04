import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SafePipeModule } from 'safe-pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBar2Component } from './nav-bar2/nav-bar2.component';
import { FireExtinguisherFormComponent } from './fire-extinguisher-form/fire-extinguisher-form.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { Login1Component } from './login1/login1.component';
import { ServiceComponent } from './service/service.component';
import { GuidesComponent } from './guides/guides.component';
import { ContactComponent } from './contact/contact.component';
import { ReportComponent } from './report/report.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { Service1Component } from './service1/service1.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBar2Component,
    FireExtinguisherFormComponent,
    HomeComponent,
    Login1Component,
    ServiceComponent,
    GuidesComponent,
    ContactComponent,
    ReportComponent,
    TestimonialsComponent,
    Service1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SafePipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
