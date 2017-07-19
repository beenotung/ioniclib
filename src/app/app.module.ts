import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {ProgressService} from '../providers/progress-service/progress-service';
import {CustomBrowserXhr} from '../providers/custom-browser-xhr/custom-browser-xhr';
import {HLineComponent} from '../components/h-line/h-line';
import {LoadingComponent} from '../components/loading/loading';
import {HorizonService} from '../providers/horizon-service/horizon-service';

@NgModule({
  declarations: [
    HLineComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(IonicLibModule)
  ],
  entryComponents: [],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProgressService,
    CustomBrowserXhr,
    HorizonService,
  ],
  exports: [
    HLineComponent,
    LoadingComponent,
  ],
})
export class IonicLibModule {
}
