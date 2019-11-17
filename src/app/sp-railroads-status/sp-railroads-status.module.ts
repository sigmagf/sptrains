import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SpRailroadsStatusComponent } from './sp-railroads-status.component';
import { DrawRailroadComponent } from './draw-railroad/draw-railroad.component';
import { ModalComponent } from './modal/modal.component';
import { StatusConvertPipe } from './pipes/status-convert.pipe';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    SpRailroadsStatusComponent,
    StatusConvertPipe,
    DrawRailroadComponent,
    ModalComponent
  ],
  entryComponents: [ ModalComponent ],
  imports: [
    CommonModule,
    HttpClientModule,

    MDBBootstrapModule
  ],
  exports: [
    SpRailroadsStatusComponent
  ]
})
export class SpRailroadsStatusModule { }
