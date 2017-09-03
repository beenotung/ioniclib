import {ErrorHandler, NgModule} from "@angular/core";
import {IonicErrorHandler, IonicModule} from "ionic-angular";

@NgModule({
  declarations: [],
  imports: [
    IonicModule.forRoot(AppModule)
  ],
  entryComponents: [],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ],
  exports: [],
})
export class AppModule {
}
