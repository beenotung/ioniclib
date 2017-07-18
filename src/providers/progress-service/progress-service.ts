import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';

/*
  Generated class for the ProgressService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProgressService {
  downloadProgress: Subject<any> = new Subject();
  uploadProgress: Subject<any> = new Subject();
}
