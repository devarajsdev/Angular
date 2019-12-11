import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PetComponent } from './pet/pet.component';

const routes:Routes=[
  {path:'pet', component:PetComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PetComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes)
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
