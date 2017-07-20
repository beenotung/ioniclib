import {Component, Input} from '@angular/core';
import {Platform} from 'ionic-angular';

export enum HLineMode {
  theme, raw, nocolor
}

const Mode = HLineMode;

/**
 * Generated class for the HLineComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'h-line',
  template: `
    <div
      *ngIf="mode===Mode.raw"
      [style.background]="_color"
      [style.height]="height"
      [style.padding]="padding"
      class="center-line"
    ></div>

    <!-- TODO fix ion-nav AOT compile issue -->
    <ion-toolbar
      *ngIf="mode===Mode.theme"
      hideBackButton
      showWhen="ios"
      [color]="_color"
      [style.padding]="padding"
      [style.height]="height"
    ></ion-toolbar>

    <div
      *ngIf="mode===Mode.nocolor"
      [style.height]="height"
    ></div>
  `
})
export class HLineComponent {

  @Input()
  height = '2px';

  @Input()
  color = 'black';

  @Input()
  rawColor: boolean | string = false;

  @Input()
  padding = '0';

  @Input()
  nocolor: boolean = false;

  Mode = HLineMode;

  constructor(public platform: Platform) {
    console.log('Hello HLineComponent Component');
  }

  get mode(): HLineMode {
    return this.nocolor !== false
      ? Mode.nocolor
      : this.rawColor == true || typeof this.rawColor === 'string'
        ? Mode.raw
        : Mode.theme;
  }

  get _color(): string {
    switch (this.mode) {
      case Mode.theme:
        return this.color;
      case Mode.raw:
        return this.rawColor == true
          ? this.color
          : <string>this.rawColor;
      case Mode.nocolor:
        return '';
    }
  }
}

