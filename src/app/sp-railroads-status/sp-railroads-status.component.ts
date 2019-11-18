import { Component, OnInit } from '@angular/core';

import { Linha } from './classes/Linha';
import { GetStatusService } from './services/get-status.service';;
import { ModalComponent } from './modal/modal.component';

import { timer } from 'rxjs';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md'

@Component({
  selector: 'app-sp-railroads-status',
  templateUrl: './sp-railroads-status.component.html',
  styleUrls: ['./sp-railroads-status.component.scss']
})
export class SpRailroadsStatusComponent implements OnInit {

  linhas: Linha[];

  modalRef: MDBModalRef;

  constructor(private lineStatus: GetStatusService, private modalService: MDBModalService) { }

  ngOnInit() {
    let callTimer = timer(0,50000);
    callTimer.subscribe(() => {
      this.lineStatus.getLinesStatus().subscribe(response => this.linhas = response);
    });
  }

  openModal(linha: Linha) {
    this.modalRef = this.modalService.show(ModalComponent, {
      class: '',
      data: { linha: linha }
    });
  }

}
