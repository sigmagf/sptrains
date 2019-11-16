import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SpRailroadsStatusComponent } from './sp-railroads-status.component';
import { StatusConvertPipe } from './pipes/status-convert.pipe';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    SpRailroadsStatusComponent,
    StatusConvertPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    MDBBootstrapModule.forRoot()
  ],
  exports: [
    SpRailroadsStatusComponent
  ]
})
export class SpRailroadsStatusModule { }
