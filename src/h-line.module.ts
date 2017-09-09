import {NgModule} from "@angular/core";
import {HLineComponent} from "./components";
import {IonicModule} from "ionic-angular";

@NgModule({
  imports: [IonicModule],
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
