import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {HLineModule} from "../../";
import {HLineComponent} from "./h-line.component";

describe("HLineComponent", () => {
  let componentFixture: ComponentFixture<HLineComponent>;
  let componentInstance: HLineComponent;

  // Asynchronous beforeEach.
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [HLineModule]
      }).compileComponents().then(() => { /* Don't do anything */
      });
    })
  );

  // Synchronous BeforeEach.
  beforeEach(() => {
    componentFixture = TestBed.createComponent(HLineComponent);
    componentInstance = componentFixture.componentInstance;
  });

});
