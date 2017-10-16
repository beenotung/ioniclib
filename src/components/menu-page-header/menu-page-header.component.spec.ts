import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {MenuPageHeaderComponent} from "./menu-page-header.component";
import {MenuPageHeaderModule} from "../../menu-page-header.module";
import {mockApp, mockConfig} from "ionic-angular/util/mock-providers";
import {App, Config} from "ionic-angular";

describe("MenuPageHeaderComponent", () => {
  let component: MenuPageHeaderComponent;
  let fixture: ComponentFixture<MenuPageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MenuPageHeaderModule],
      providers: [
        {provide: App, useValue: mockApp()},
        {provide: Config, useValue: mockConfig()},
        // MenuController,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
