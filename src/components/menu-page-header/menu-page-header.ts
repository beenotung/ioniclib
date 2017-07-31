import {Component, Input} from "@angular/core";

@Component({
  selector: "menu-page-header",
  templateUrl: "menu-page-header.html"
})
export class MenuPageHeaderComponent {

  @Input()
  title: string;

}
