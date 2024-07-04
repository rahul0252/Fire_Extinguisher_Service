import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FireExtinguisherFormComponent } from './fire-extinguisher-form/fire-extinguisher-form.component';
import { HomeComponent } from './home/home.component';
import { Login1Component } from './login1/login1.component';
import { ServiceComponent } from './service/service.component';
import { GuidesComponent } from './guides/guides.component';
import { ContactComponent } from './contact/contact.component';
import { ReportComponent } from './report/report.component';
import { Service1Component } from './service1/service1.component';




const routes: Routes = [
  { path: '', component: Login1Component, pathMatch: 'full' },
  { path: 'forms', component: FireExtinguisherFormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'guides', component: GuidesComponent },
  { path: 'contact', component: ContactComponent},
  {path:'reports',component:ReportComponent},
  {path:'service1',component:Service1Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
