import {Component, Input} from '@angular/core';
import {isDefined} from '@beenotung/tslib/src/lang';
import {assets} from '../../app/app.res';

/**
 * Generated class for the LoadingComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'loading-cmp',
  template: `
    <img [src]="imgSrc" [width]="imgWidth" [height]="imgHeight" *ngIf="customSize()">
    <img [src]="imgSrc" [width]="33.33" *ngIf="!customSize()">
  `
})
export class LoadingComponent {

  @Input()
  imgWidth: number | string;
  @Input()
  imgHeight: number | string;

  @Input()
  imgSrc = assets.img.loading;

  constructor() {
    console.log('Hello LoadingComponent Component');
  }

  customSize(): boolean {
    return isDefined(this.imgHeight) || isDefined(this.imgWidth);
  }
}
