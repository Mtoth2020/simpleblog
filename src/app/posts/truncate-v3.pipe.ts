import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncateV3 implements PipeTransform {

  transform(value: string | undefined, count: number): string {
    if (!value) return "";
    let result = value;
    if (value.length > count) {
      result = value.substr(0, count);
      result = result.concat("...");
    }
    return result;
  }

}
