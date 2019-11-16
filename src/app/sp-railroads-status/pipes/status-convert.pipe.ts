import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusConvert'
})
export class StatusConvertPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    switch(value){
      case 'Operação Normal': return 1;
      case 'Paralisada': return 3;
      case 'Operações Encerradas':
      case 'Operação Encerrada': return 4;
      default: return 2;
    }
  }

}
