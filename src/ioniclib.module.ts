import {BrowserModule} from "@angular/platform-browser";
import {ErrorHandler, NgModule} from "@angular/core";
import {IonicErrorHandler, IonicModule} from "ionic-angular";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";

import {ProgressService} from "./providers/progress-service/progress-service";
import {CustomBrowserXhr} from "./providers/custom-browser-xhr/custom-browser-xhr";
import {HLineComponent} from "./components/h-line/h-line";
import {LoadingComponent} from "./components/loading/loading";
import {HorizonService} from "./providers/horizon-service/horizon-service";
import {MenuPageHeaderComponent} from "./components/menu-page-header/menu-page-header";
import {ModalHeaderComponent} from "./components/modal-header/modal-header";
import {FormatByte} from "./pipes/format-byte/format-byte";
import {UploadButtonComponent} from "./components/upload-button/upload-button";

@NgModule({
  declarations: [
    HLineComponent
    , LoadingComponent
    , MenuPageHeaderComponent
    , ModalHeaderComponent
    , FormatByte
    , UploadButtonComponent
  ],
  imports: [
    BrowserModule
    , IonicModule
  ],
  entryComponents: [],
  providers: [
    StatusBar
    , SplashScreen
    , {provide: ErrorHandler, useClass: IonicErrorHandler}
    , ProgressService
    , CustomBrowserXhr
    , HorizonService
  ],
  exports: [
    HLineComponent
    , LoadingComponent
    , MenuPageHeaderComponent
    , ModalHeaderComponent
    , FormatByte
    , UploadButtonComponent
  ],
})
export class IonicLibModule {
}
