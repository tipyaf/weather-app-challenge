import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], value: any, key?: any): any {
    console.log(items, value);
    if (!items || !value) {
      return items;
    } else if (key) { // if is key match item with value
      return _.filter(items, (item => {
        return _.includes(this.formated(item[key]), this.formated(value));
      }));
    }

    return _.filter(items, (item => {
      return _.includes(this.formated(item), this.formated(value));
    }));
  }

  // helper to return lowerCase if is string
  formated(value) {
    return _.isString(value) ? _.lowerCase(value) : value;
  }

}
