import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent }  from './app.component';
import { NavComponent } from './nav-bar.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { ProjectsComponent } from './projects.component';
import { BlogComponent } from './blog.component';
import { CreditComponent } from './credit.component';

import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, NavComponent, AboutComponent, ContactComponent, ProjectsComponent, BlogComponent, CreditComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
