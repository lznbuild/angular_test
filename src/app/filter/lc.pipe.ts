import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lc'
})
export class LcPipe implements PipeTransform {

  transform(value: string, ...args: []): string {
    return  value+'1230000000';
  }

}
