import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { HttpModule, JsonpModule, Http } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { AngularMaterialModule } from './angular-material.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
		ReactiveFormsModule,
		BrowserModule,
		HttpModule,
		JsonpModule,
		BrowserAnimationsModule,
    CommonModule,
    AngularMaterialModule
    
  ],
  exports:[


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
