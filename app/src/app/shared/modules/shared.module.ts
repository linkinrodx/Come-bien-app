import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableSimpleComponent } from '../components/table-simple/table-simple.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [    
    TableSimpleComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports: [
    TableSimpleComponent,
    
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ]
})
export class SharedModule { }
