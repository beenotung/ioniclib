import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {UploadButtonComponent} from "./upload-button.component";
import {UploadButtonModule} from "../../upload-button.module";

describe("UploadButtonComponent", () => {
  let component: UploadButtonComponent;
  let fixture: ComponentFixture<UploadButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UploadButtonModule]
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
