import { enum_only_string } from '@beenotung/tslib/enum';

export enum LineMode {
  theme,
  raw,
  nocolor,
}

enum_only_string(LineMode);
