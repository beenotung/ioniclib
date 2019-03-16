import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HLineComponent } from './components/h-line/h-line.component';
import { VLineComponent } from './components/v-line/v-line.component';

@NgModule({
  imports: [IonicModule],
  providers: [
    // Service
  ],
  declarations: [HLineComponent, VLineComponent],
  exports: [HLineComponent, VLineComponent],
})
export class LineModule {}
