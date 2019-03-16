import { Platform } from 'ionic-angular';
import { enum_only_string } from '@beenotung/tslib/enum';

export enum AppType {
  web,
  android,
  ios,
  windows,
}

enum_only_string(AppType);

export function getAppType(platform: Platform): AppType {
  return platform.is('mobileweb')
    ? AppType.web
    : platform.is('android')
    ? AppType.android
    : platform.is('ios')
    ? AppType.ios
    : platform.is('windows')
    ? AppType.windows
    : (() => {
        throw new TypeError('unknown platform');
      })();
}
