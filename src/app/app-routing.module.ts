import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "jobs", component: JobsComponent },
  { path: "jobs/:jobID", component: JobDetailsComponent },

  { path: "**", component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
