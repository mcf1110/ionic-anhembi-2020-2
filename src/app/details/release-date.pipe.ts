import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'releaseDate'
})
export class ReleaseDatePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return 'Desconhecido';
    }
    return value.split('-').reverse().join('/');
  }

}
