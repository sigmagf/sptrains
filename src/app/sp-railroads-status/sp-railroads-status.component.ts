import { Component, OnInit } from '@angular/core';

import { LineModel } from './classes/lineModel';
import { GetStatusService } from './services/get-status.service';

import { ModalInfo } from './classes/modalInfo';
import { timer } from 'rxjs';

@Component({
  selector: 'app-sp-railroads-status',
  templateUrl: './sp-railroads-status.component.html',
  styleUrls: ['./sp-railroads-status.component.scss']
})
export class SpRailroadsStatusComponent implements OnInit {

  linhas: LineModel[];
  statusModalInfo: ModalInfo = new ModalInfo;

  constructor(private lineStatus: GetStatusService) { }

  ngOnInit() {
    let callTimer = timer(0,5000);
    callTimer.subscribe(() => {
      this.lineStatus.getLinesStatus().subscribe(response => this.linhas = response);
    })
  }
  

  openModalStatus(linha: LineModel) {
    let data = linha.atualizado.split(' ');

    this.statusModalInfo = {
      titulo: `${linha.linha}-${linha.cor}`,
      corpo: linha.detalhe != '' ? linha.detalhe : linha.status,
      rodape: `ATUALIZADO EM ${data[0]} AS ${data[1]}`
    }
  }

}
