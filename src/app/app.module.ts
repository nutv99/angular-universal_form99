import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {LabtableComponent} from './labtable/labtable.component'  ;
import {LabdragcolComponent} from './labdragcol/labdragcol.component'  ;


@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule,FormsModule ],
  declarations: [ AppComponent, HelloComponent,LabtableComponent,LabdragcolComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
