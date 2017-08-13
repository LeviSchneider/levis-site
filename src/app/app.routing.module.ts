import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { ProjectsComponent } from './projects.component';
import { BlogComponent } from './blog.component';
import { CreditComponent } from './credit.component';
 
const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'credit', component: CreditComponent }
]
 
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}