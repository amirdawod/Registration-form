import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule,AppRoutingModule],
  declarations: [AppComponent, UsersComponent, RegisterComponent, NavBarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
