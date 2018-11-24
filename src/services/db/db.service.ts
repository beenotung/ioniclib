import { Injectable } from "@angular/core";
import { Horizon } from "typestub-horizon-client";
import { DBEvent } from "car-insur-model";
import { Observable } from "rxjs";

@Injectable()
export class DbService {
  hz: Promise<Horizon>;

  constructor() {
    console.log("Hello DbService Provider");
    this.init();
    this.watchEvent().subscribe(
      xs => console.log({ xs }),
      e => console.error({ e }),
      () => console.log("complete")
    );
  }

  init() {
    this.hz = new Promise<Horizon>((resolve, reject) => {
      let hz = new Horizon({
          host: "localhost:8181"
        }
      );
      hz.onSocketError(e => {
        console.error("hz socket error:", e);
        reject(e);
      });
      hz.onReady(() => {
        console.log("hz ready");
        resolve(hz);
      });
      hz.onDisconnected(() => {
        console.log("hz disconnected");
        reject();
      });
      console.log("connecting hz...");
      hz.connect();
    });
  }

  async events() {
    return this.hz.then(hz => hz("events"));
  }

  async storeEvent(event: DBEvent) {
    let events = await this.events();
    return events.store(event).toPromise();
  }

  watchEvent() {
    return Observable.fromPromise(this.events())
      .mergeMap(events => events.watch());
  }

}
