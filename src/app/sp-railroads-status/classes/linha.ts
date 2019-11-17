import { Estacao } from './estacao';

export class Linha {
    codigo: number;
    cor: string;
    controle: string;
    status: string;
    detalhe: string;
    estacoes: Estacao[];
    atualizado: string;
}