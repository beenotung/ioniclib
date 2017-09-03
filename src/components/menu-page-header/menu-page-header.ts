import {Component, Input} from "@angular/core";

@Component({
  selector: "menu-page-header",
  template: `
    <!-- For the direct page from side menu -->
    <ion-navbar>
      <button ion-button menuToggle>
        <ion-icon name="menu"></ion-icon>
      </button>
      <ion-title>{{title}}</ion-title>
    </ion-navbar>
  `
})
export class MenuPageHeaderComponent {

  @Input()
  title: string;

}
