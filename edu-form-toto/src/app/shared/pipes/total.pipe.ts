import { Pipe, PipeTransform } from '@angular/core';
import { Prestation } from '../models/prestation.model';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {
  readonly typeOfTotal = ['HT', 'TTC'];

  transform(value: Prestation, args?: any): any {
    if (value) {

      if (args && args === this.typeOfTotal[1]) {
        return value.totalTTC();
      }
      return value.totalHT();
    }
    return undefined;
  }
}
