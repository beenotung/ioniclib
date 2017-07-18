import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {ProgressService} from '../progress-service/progress-service';
import {getHorizon, horizon_api_size, is_debug_load_horizon, setHorizonAPISize} from '@beenotung/tslib/src/horizon';
import {createDefer} from '@beenotung/tslib/src/async';


/*
  Generated class for the HorizonService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HorizonService {

  is_debug_load_horizon = is_debug_load_horizon;

  constructor(public http: Http
    , public progressService: ProgressService) {
    console.log('Hello HorizonService Provider');
  }

  async load_horizon(url: string = 'http://localhost:8181/horizon/horizon.js', preF?: Function) {
    if (typeof preF === 'function') {
      preF();
    }
    const sub = this.progressService.downloadProgress.subscribe(event => {
      if (this.is_debug_load_horizon) {
        console.log(event.loaded, event.loaded / horizon_api_size * 100 + '%');
      }
    });
    const defer = createDefer<void, string>();
    this.http.get(url)
      .map(res => res.text())
      .subscribe(
        data => {
          const script = document.createElement('script');
          script.innerText = data;
          document.head.appendChild(script);
          if (typeof getHorizon() === 'function') {
            setHorizonAPISize(data.length);
            defer.resolve(void 0);
          } else {
            defer.reject('failed to inject horizon script, loaded Horizon is not function');
          }
        }
        , defer.reject
        , () => sub.unsubscribe()
      );
    return defer.promise;
  }
}
