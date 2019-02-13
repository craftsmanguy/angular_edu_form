import { Directive, Input, HostBinding, OnChanges } from '@angular/core';
import { Type } from '../enums/type.enum';

@Directive({
  selector: '[appType]'
})
export class TypeDirective implements OnChanges {
  @Input() appType: Type;
  @HostBinding('class') nomClass: string;

  constructor() {}

  ngOnChanges() {
    console.log(this.appType);
    this.nomClass = this.formatClass(this.appType);
  }

  formatClass(type: Type): string {
    console.log(type.toLowerCase);
    return `type-${type
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase()}`;
  }
}
