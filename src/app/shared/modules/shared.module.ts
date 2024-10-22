import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableSimpleComponent } from '../components/table-simple/table-simple.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [    
    TableSimpleComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatToolbarModule, MatButtonModule, MatIconModule,
    MatSidenavModule
  ],
  exports: [
    TableSimpleComponent,
    
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatToolbarModule, MatButtonModule, MatIconModule,
    MatSidenavModule
  ]
})
export class SharedModule { }
