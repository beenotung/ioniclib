import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {ModalHeaderComponent} from "./modal-header.component";
import {App, Config, Platform, ViewController} from "ionic-angular";
import {mockApp, mockConfig, mockPlatform, mockView} from "ionic-angular/util/mock-providers";
import {ModalHeaderModule} from "../../modal-header.module";

describe("ModalHeaderComponent", () => {
  let component: ModalHeaderComponent;
  let fixture: ComponentFixture<ModalHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ModalHeaderModule],
      providers: [
        {provide: App, useValue: mockApp()},
        {provide: Config, useValue: mockConfig()},
        {provide: Platform, useValue: mockPlatform()},
        {provide: ViewController, useValue: mockView()},
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
