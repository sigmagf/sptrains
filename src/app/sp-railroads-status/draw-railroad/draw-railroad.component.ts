import { Component, OnInit, Input } from '@angular/core';
import { Estacao } from '../classes/estacao';

@Component({
  selector: 'app-draw-railroad',
  templateUrl: './draw-railroad.component.html',
  styleUrls: ['./draw-railroad.component.scss']
})
export class DrawRailroadComponent implements OnInit {

  @Input() estacoes: Estacao[];
  @Input() linha: string;
  @Input() width: number;

  constructor() { }

  ngOnInit() { }

}
