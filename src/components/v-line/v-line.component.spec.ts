import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineModule } from '../../line.module';
import { VLineComponent } from './v-line.component';

describe('VLineComponent', () => {
  let componentFixture: ComponentFixture<VLineComponent>;
  let componentInstance: VLineComponent;

  // Asynchronous beforeEach.
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LineModule],
    })
      .compileComponents()
      .then(() => {
        /* Don't do anything */
      });
  }));

  // Synchronous BeforeEach.
  beforeEach(() => {
    componentFixture = TestBed.createComponent(VLineComponent);
    componentInstance = componentFixture.componentInstance;
  });
});
