import {Component, Input} from "@angular/core";

@Component({
  selector: "menu-page-header",
  templateUrl: "./menu-page-header.component.html",
  styleUrls: ["./menu-page-header.component.scss"]
})
export class MenuPageHeaderComponent {

  @Input()
  title?: string;

  constructor() {
  }

}
