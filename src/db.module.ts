import {NgModule} from "@angular/core";
import {DbService} from "./services/db/db.service";

@NgModule({
  providers: [
    DbService,
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class DbModule {
}
