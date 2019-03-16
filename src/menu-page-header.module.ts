import { NgModule } from '@angular/core';
import { MenuPageHeaderComponent } from './components/menu-page-header/menu-page-header.component';
import { IonicModule, MenuController } from 'ionic-angular';

@NgModule({
  imports: [IonicModule],
  providers: [MenuController],
  declarations: [MenuPageHeaderComponent],
  exports: [MenuPageHeaderComponent],
})
export class MenuPageHeaderModule {}
