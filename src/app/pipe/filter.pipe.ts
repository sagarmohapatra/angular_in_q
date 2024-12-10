import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, searchTerm: any): any {
    if(!value) return []
    if(!searchTerm) return value;
    return value.filter((search: any) => {
      return search.name.toLowerCase().includes(searchTerm.toLowerCase()) ;
    });
  }
}
