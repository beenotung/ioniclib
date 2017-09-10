import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {UploadButtonComponent} from "./upload-button.component";
import {UploadButtonModule} from "../../upload-button.module";
import {Config} from "ionic-angular";
import {mockConfig} from "ionic-angular/util/mock-providers";

describe("UploadButtonComponent", () => {
  let component: UploadButtonComponent;
  let fixture: ComponentFixture<UploadButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UploadButtonModule],
      providers: [
        {provide: Config, useValue: mockConfig()}
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
