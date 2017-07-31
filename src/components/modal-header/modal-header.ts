import {Component, Input} from "@angular/core";
import {ViewController} from "ionic-angular";

@Component({
  selector: "modal-header",
  templateUrl: "modal-header.html"
})
export class ModalHeaderComponent {

  @Input()
  title: string;

  constructor(private viewCtrl: ViewController) {
  }

  dismiss() {
    return this.viewCtrl.dismiss();
  }
}
