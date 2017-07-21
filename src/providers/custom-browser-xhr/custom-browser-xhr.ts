import {Injectable} from "@angular/core";
import {BrowserXhr} from "@angular/http";
import "rxjs/add/operator/map";
import {ProgressService} from "../progress-service/progress-service";

/*
  Generated class for the CustomBrowserXhr provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CustomBrowserXhr extends BrowserXhr {
  constructor(private service: ProgressService) {
    super();
  }

  build(): any {
    const xhr = super.build();
    xhr.onprogress = (event) => {
      this.service.downloadProgress.next(event);
    };

    xhr.upload.onprogress = (event) => {
      this.service.uploadProgress.next(event);
    };
    return <any>(xhr);
  }
}
