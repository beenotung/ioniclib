import { Component, Input } from '@angular/core';
import { LineMode } from '../line/line-mode';

const Mode = LineMode;

@Component({
  selector: 'h-line',
  styleUrls: ['./h-line.component.scss'],
  templateUrl: './h-line.component.html',
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

  Mode = LineMode;

  constructor() {}

  get mode(): LineMode {
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
        return this.rawColor == true ? this.color : (this.rawColor as string);
      case Mode.nocolor:
        return '';
    }
  }
}
