import { Pipe, PipeTransform } from '@angular/core';
import { TipoPonto } from '../models/tipo-ponto.enum';

@Pipe({
  name: 'tipoLancamento'
})
export class TipoPipe implements PipeTransform {

  transform(tipo: TipoPonto, args?: any ): string {
    return this.obterTexto(tipo);
  }

  obterTexto(tipo: TipoPonto): string {

    let tipoDesc: string;

    switch(tipo) {
      case TipoPonto.INICIO_TRABALHO:
        tipoDesc = 'Início do Trabalho';
        break;
      case TipoPonto.INICIO_ALMOCO:
        tipoDesc = 'Início do Almoço';
        break;
      case TipoPonto.TERMINO_ALMOCO:
        tipoDesc = 'Fim do Almoço';
        break;
      case TipoPonto.TERMINO_TRABALHO:
        tipoDesc = 'Fim do Trabalho';
        break;
      default:
        tipoDesc = tipo;
        break;
    }

    return tipoDesc;

  }

}
