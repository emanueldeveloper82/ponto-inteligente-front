import { Pipe, PipeTransform } from '@angular/core';


import * as moment from 'moment';

@Pipe({
  name: 'dataLancamento'
})
export class DataPipe implements PipeTransform {

  transform(data: string, args?: any[]): string {
    return moment(data).format('DD/MM/YYYY HH:mm:ss');
  }

}
