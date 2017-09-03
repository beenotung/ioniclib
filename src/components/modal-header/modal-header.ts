import {Component, Input} from "@angular/core";
import {ViewController} from "ionic-angular";

@Component({
  selector: "modal-header",
  template: `
    <ion-toolbar>
      <ion-title>{{title}}</ion-title>
      <ion-buttons start>
        <button ion-button (click)="dismiss()">
          <span ion-text color="primary" showWhen="ios">Cancel</span>
          <ion-icon name="md-close" hideWhen="ios"></ion-icon>
        </button>
      </ion-buttons>
    </ion-toolbar>
  `
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
