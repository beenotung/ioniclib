import {NgModule} from "@angular/core";
import {ModalHeaderComponent} from "./components/modal-header/modal-header.component";
import {IonicModule} from "ionic-angular";

@NgModule({
  imports: [IonicModule],
  providers: [],
  declarations: [
    ModalHeaderComponent,
  ],
  exports: [
    ModalHeaderComponent,
  ]
})
export class ModalHeaderModule {
}
