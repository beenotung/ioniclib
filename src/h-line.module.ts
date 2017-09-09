import {NgModule} from "@angular/core";
import {HLineComponent} from "./components";
import {IonicApp} from "ionic-angular";

@NgModule({
  imports: [IonicApp],
  providers: [
    // Service
  ],
  declarations: [
    HLineComponent,
  ],
  exports: [
    HLineComponent,
  ]
})
export class HLineModule {
}
