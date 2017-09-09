import {Component, EventEmitter, Input, Output} from "@angular/core";
import {ViewController} from "ionic-angular";

@Component({
  selector: "modal-header",
  templateUrl: "./modal-header.component.html",
  styleUrls: ["./modal-header.component.scss"]
})
export class ModalHeaderComponent {

  @Input()
  title: string;

  @Input()
  autoDismiss = true;

  @Output()
  dismiss = new EventEmitter();

  constructor(public viewCtrl: ViewController) {

  }

  onDismiss(event: Event) {
    this.dismiss.emit(event);
    if (this.autoDismiss) {
      return this.viewCtrl.dismiss(event);
    }
  }
}
