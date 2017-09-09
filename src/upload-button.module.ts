import {NgModule} from "@angular/core";
import {IonicModule} from "ionic-angular";
import {UploadButtonComponent} from "./components/upload-button/upload-button.component";

@NgModule({
  imports: [IonicModule],
  providers: [],
  declarations: [
    UploadButtonComponent,
  ],
  exports: [
    UploadButtonComponent,
  ]
})
export class UploadButtonModule {
}
