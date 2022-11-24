import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { ViewAllEmpComponent } from './view-all-emp/view-all-emp.component';
import { NavComponent } from './nav/nav.component';

const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"add",
    component:AddComponent
  },
  {
    path:"search",
    component:SearchComponent
  },
  {
    path:"edit",
    component:EditComponent
  },
  {
    path:"delete",
    component:DeleteComponent
  },
  {
    path:"view",
    component:ViewAllEmpComponent
  }

]



@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddComponent,
    SearchComponent,
    EditComponent,
    DeleteComponent,
    ViewAllEmpComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
