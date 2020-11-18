import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'releaseDate'
})
export class ReleaseDatePipe implements PipeTransform {

  transform(value: string | null): string {
    if (value === null) {
      return 'Presente';
    }
    if (!isNaN(+value)) { // é um número
      return value;
    }

    const [year, month, day] = value.split('-');

    return day ? `${day}/${month}/${year}` : `${month}/${year}`;
  }

}
